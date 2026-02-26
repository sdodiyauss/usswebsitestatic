'use client';

import { useEffect, useMemo, useState } from 'react';

const SOCIAL_IN_APP_REGEXES = [
  /FBAN|FBAV|FB_IAB|FBIOS|FBSS|Messenger/i, // Facebook / Messenger
  /Instagram|IGBrowser|InstagramApp/i,
  /Line\/|LineBrowser/i,
  /LinkedInApp|LIApp|LinkedIn/i,
  /Snapchat/i,
  /WhatsApp|WAApp/i,
  /Twitter|TwitterFor|OkHttp\/Twitter/i,
  /Pinterest|PinterestiOS/i,
  /TikTok|com\.zhiliaoapp/i,
  /WeChat|MicroMessenger/i,
];

function isSocialInAppBrowser(userAgent = '') {
  if (!userAgent) return false;

  const uaMatch = SOCIAL_IN_APP_REGEXES.some((regex) => regex.test(userAgent));
  if (uaMatch) {
    return true;
  }

  if (typeof document !== 'undefined') {
    const ref = document.referrer || '';
    if (/linkedin\.com|lnkd\.in|l\.facebook\.com|t\.co/i.test(ref)) {
      return true;
    }
  }

  return false;
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

    if (!inAppBrowser || alreadyHandled) {
      return undefined;
    }

    window.sessionStorage.setItem('uss_inapp_redirect_attempted', '1');
    setHasAttemptedRedirect(true);

    const { isAndroid, isIOS } = detectPlatform(userAgent);

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
    } else {
      setShowOverlay(true);
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
        }}
      >
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
      </div>
    </div>
  );
}

