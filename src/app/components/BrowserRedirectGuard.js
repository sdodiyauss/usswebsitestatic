'use client';

import { useEffect, useMemo, useState } from 'react';

// Match only real in-app browser UA tokens — not generic words like "LinkedIn"
// that appear when a normal browser is opened from a social post.
const SOCIAL_IN_APP_REGEXES = [
  /FBAN|FBAV|FB_IAB|FBIOS|FBSS/i, // Facebook
  /Messenger/i,
  /Instagram|IGBrowser|InstagramApp/i,
  /Line\/|LineBrowser/i,
  /LinkedInApp|LIApp/i, // do not match bare "LinkedIn"
  /Snapchat/i,
  /WhatsApp|WAApp/i,
  /TwitterFor(?:iPhone|Android)|OkHttp\/Twitter/i,
  /Pinterest|PinterestiOS/i,
  /TikTok|BytedanceWebview|musical_ly|com\.zhiliaoapp/i,
  /MicroMessenger/i, // WeChat
];

function isSocialInAppBrowser(userAgent = '') {
  if (!userAgent) return false;
  return SOCIAL_IN_APP_REGEXES.some((regex) => regex.test(userAgent));
}

function detectPlatform(userAgent = '') {
  return {
    isAndroid: /Android/i.test(userAgent),
    isIOS: /(iPhone|iPad|iPod)/i.test(userAgent),
  };
}

function buildAndroidIntentUrl(currentUrl) {
  const sanitizedUrl = currentUrl.replace(/^https?:\/\//i, '');
  return `intent://${sanitizedUrl}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(
    currentUrl,
  )};end`;
}

function buildChromeIosUrl(currentUrl) {
  const sanitizedUrl = currentUrl.replace(/^https?:\/\//i, '');
  return `googlechromes://${sanitizedUrl}`;
}

export default function BrowserRedirectGuard() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasAttemptedRedirect, setHasAttemptedRedirect] = useState(false);

  const { userAgent, href } = useMemo(() => {
    if (typeof window === 'undefined') {
      return { userAgent: '', href: '' };
    }
    return {
      userAgent: window.navigator.userAgent || '',
      href: window.location.href,
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const timers = [];
    let cancelled = false;

    const alreadyHandled =
      window.sessionStorage.getItem('uss_inapp_redirect_attempted') === '1';

    const inAppBrowser = isSocialInAppBrowser(userAgent);
    const { isAndroid, isIOS } = detectPlatform(userAgent);

    // Only act inside real mobile in-app browsers.
    // Desktop Chrome opened from a LinkedIn post must not show this overlay.
    if (!inAppBrowser || alreadyHandled || (!isAndroid && !isIOS)) {
      return undefined;
    }

    window.sessionStorage.setItem('uss_inapp_redirect_attempted', '1');
    setHasAttemptedRedirect(true);

    if (isAndroid) {
      const intentUrl = buildAndroidIntentUrl(href);
      try {
        window.location.href = intentUrl;
      } catch (error) {
        console.warn('Android intent redirect failed', error);
      }
      const timer = window.setTimeout(() => {
        if (!cancelled) {
          setShowOverlay(true);
        }
      }, 1200);
      timers.push(timer);
    } else if (isIOS) {
      const chromeUrl = buildChromeIosUrl(href);
      const fallbackTimer = window.setTimeout(() => {
        if (!cancelled) {
          setShowOverlay(true);
        }
      }, 1500);
      timers.push(fallbackTimer);

      try {
        window.location.href = chromeUrl;
      } catch (error) {
        console.warn('iOS Chrome redirect failed', error);
        window.clearTimeout(fallbackTimer);
        if (!cancelled) {
          setShowOverlay(true);
        }
      }
    }

    const absoluteFallback = window.setTimeout(() => {
      if (!cancelled) {
        setShowOverlay(true);
      }
    }, 3000);
    timers.push(absoluteFallback);

    return () => {
      cancelled = true;
      timers.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, [href, userAgent]);

  if (!showOverlay) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        color: '#fff',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#1c1c1c',
          borderRadius: '12px',
          padding: '1.75rem',
          maxWidth: '22rem',
          width: '100%',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          position: 'relative',
        }}
      >
        <button
          type="button"
          onClick={() => setShowOverlay(false)}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '1.25rem',
            lineHeight: 1,
            cursor: 'pointer',
            opacity: 0.8,
            padding: '0.25rem',
          }}
        >
          ×
        </button>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
          Open in Your Browser
        </h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          For the best experience and to submit the form successfully, please open
          this page in Chrome, Firefox, or Safari.
        </p>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            • Tap the menu icon in the top-right corner.
          </p>
          <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            • Choose <strong>Open in browser</strong> or <strong>Open in Chrome / Safari</strong>.
          </p>
          <p style={{ fontSize: '0.85rem' }}>
            • If prompted, confirm to switch to your default browser.
          </p>
        </div>
        {hasAttemptedRedirect && (
          <p style={{ fontSize: '0.75rem', marginTop: '1rem', opacity: 0.85 }}>
            We tried to automatically open your default browser. If it didn&apos;t work,
            please follow the steps above.
          </p>
        )}
        <button
          type="button"
          onClick={() => setShowOverlay(false)}
          style={{
            marginTop: '1.25rem',
            width: '100%',
            padding: '0.7rem 1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#2563eb',
            color: '#fff',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Continue on this page
        </button>
      </div>
    </div>
  );
}
