import React from "react";
import CompTermsConditions from "./CompTermsConditions";

export const metadata = {
  title: 'Terms & Conditions – Your Rights & Responsibilities',
  description: 'Review our Terms & Conditions to understand your rights, obligations, and how we ensure a safe, transparent, and fair experience for all users.',
  openGraph: {
    title: 'Terms & Conditions – Your Rights & Responsibilities',
    description:
      'Review our Terms & Conditions to understand your rights, obligations, and how we ensure a safe, transparent, and fair experience for all users.',
    url: 'https://www.universalstreamsolution.com/terms-conditions',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Terms & Conditions – Your Rights & Responsibilities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions – Your Rights & Responsibilities',
    description:
      'Review our Terms & Conditions to understand your rights, obligations, and how we ensure a safe, transparent, and fair experience for all users.',
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
  return <CompTermsConditions />
};

export default page;
