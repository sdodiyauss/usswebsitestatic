import React from "react";
import CompDisclaimer from "./CompDisclaimer";

export const metadata = {
  title: 'Disclaimer – Important Information & Limitations',
  description: 'Read our Disclaimer to understand the limits of liability, accuracy of information, and how to use our content responsibly for informed decisions.',
  openGraph: {
    title: 'Disclaimer – Important Information & Limitations',
    description:
      'Read our Disclaimer to understand the limits of liability, accuracy of information, and how to use our content responsibly for informed decisions.',
    url: 'https://www.universalstreamsolution.com/disclaimer',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Disclaimer – Important Information & Limitations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer – Important Information & Limitations',
    description:
      'Read our Disclaimer to understand the limits of liability, accuracy of information, and how to use our content responsibly for informed decisions.',
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
  return <CompDisclaimer />
};

export default page;
