import React from "react";
import CompCookiePolicy from "./CompCookiePolicy";

export const metadata = {
  title: 'Cookie Policy – How We Use Cookies for Better Service',
  description: 'Learn how our Cookie Policy helps improve your browsing experience. We use cookies to enhance site performance, personalize content, and ensure security.',
   openGraph: {
    title: 'Cookie Policy – How We Use Cookies for Better Service',
    description:
      'Learn how our Cookie Policy helps improve your browsing experience. We use cookies to enhance site performance, personalize content, and ensure security.',
    url: 'https://www.universalstreamsolution.com/disclaimer',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Cookie Policy – How We Use Cookies for Better Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy – How We Use Cookies for Better Service',
    description:
      'Learn how our Cookie Policy helps improve your browsing experience. We use cookies to enhance site performance, personalize content, and ensure security.',
    images: ['https://www.universalstreamsolution.com/images/usslogo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const page = async () => {
  return <CompCookiePolicy />
};

export default page;
