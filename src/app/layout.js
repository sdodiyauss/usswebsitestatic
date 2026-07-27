// src/app/layout.js
import Footer from '~/footer/Footer';
import Header from '~/header/Header';
import BrowserRedirectGuard from './components/BrowserRedirectGuard';
import "./globals.css";
import Script from 'next/script';


// Page metadata
export const metadata = {
  metadataBase: new URL('https://www.universalstreamsolution.com'),
  title: {
    default: 'USS IT Services - Custom Software Development Company',
    template: '%s | USS IT Services',
  },
  description: 'USS offers custom software development, IT services, digital transformation, and product development for startups and enterprises worldwide.',
  keywords: ['custom software development', 'IT services', 'web development', 'mobile app development', 'digital transformation', 'software solutions'],
  authors: [{ name: 'USS IT Services' }],
  creator: 'USS IT Services',
  publisher: 'USS IT Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google5de37af033f246cb",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.universalstreamsolution.com',
    siteName: 'USS IT Services',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@USS',
  },
};

// Main layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Outfit-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Outfit-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Outfit-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Outfit-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta name="google-site-verification" content="aITQYsjNkNXriZ4dJVVTIeVTYOyBug7MPToUf2db5qQ" />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W2RTVHWZ');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <BrowserRedirectGuard />
        <Header />
        <main>{children}</main>
        <Footer />

        

        {/* Load gtag script asynchronously */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17773466714"
          strategy="afterInteractive"
        />

        {/* Initialize gtag */}
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17773466714');
        `}
        </Script>


        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2RTVHWZ"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* reCAPTCHA v3 Script */}
        {/* <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&trustedtypes=true`}
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
