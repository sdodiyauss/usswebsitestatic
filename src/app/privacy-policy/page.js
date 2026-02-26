import React from "react";
import CompPrivacyPolicy from "./CompPrivacyPolicy";

export const metadata = {
  title: 'Privacy Policy – Your Data, Our Commitment',
  description: 'Read our Privacy Policy to learn how we collect, use, and protect your personal information with strict security measures and complete transparency.',
  openGraph: {
    title: 'Privacy Policy – Your Data, Our Commitment',
    description:
      'Read our Privacy Policy to learn how we collect, use, and protect your personal information with strict security measures and complete transparency.',
    url: 'https://www.universalstreamsolution.com/privacy-policy',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy – Your Data, Our Commitment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy – Your Data, Our Commitment',
    description:
      'Read our Privacy Policy to learn how we collect, use, and protect your personal information with strict security measures and complete transparency.',
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
  return <CompPrivacyPolicy />
};

export default page;
