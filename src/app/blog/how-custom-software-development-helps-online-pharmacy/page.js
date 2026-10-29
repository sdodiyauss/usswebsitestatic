import React from "react";
import CompCustomSoftDevHelpPharmacy from "./CompCustomSoftDevHelpPharmacy";

export const metadata = {
  title: 'How Custom Software Development Helps Online Pharmacy',
  description: 'Discover how custom pharmacy software can connect online and in-store operations, simplify workflows, improve patient care, and support secure, scalable growth.',
  openGraph: {
    title: 'How Custom Software Development Helps Online Pharmacy',
    description:
      'Discover how custom pharmacy software can connect online and in-store operations, simplify workflows, improve patient care, and support secure, scalable growth.',
    url: 'https://www.universalstreamsolution.com/blog/how-custom-software-development-helps-online-pharmacy',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-custom-software-development-helps-pharmacy.webp',
        width: 1200,
        height: 630,
        alt: 'How Custom Software Development Helps Online Pharmacy',  
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Custom Software Development Helps Online Pharmacy',
    description:
      'Discover how custom pharmacy software can connect online and in-store operations, simplify workflows, improve patient care, and support secure, scalable growth.',
    images: ['/images/blog-custom-software-development-helps-pharmacy.webp'],
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
  return <CompCustomSoftDevHelpPharmacy />
};

export default page;
