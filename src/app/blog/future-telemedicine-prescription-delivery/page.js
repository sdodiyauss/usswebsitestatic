import React from "react";
import CompHealthcare from "./CompHealthcare";

export const metadata = {
  title: 'The Future of Telemedicine & Online Prescription Delivery',
  description: 'Explore how telemedicine and prescription delivery are transforming healthcare with convenience, speed, and digital innovation.',
  openGraph: {
    title: 'The Future of Telemedicine & Online Prescription Delivery',
    description:
      'Explore how telemedicine and prescription delivery are transforming healthcare with convenience, speed, and digital innovation.',
    url: 'https://www.universalstreamsolution.com/blog/future-telemedicine-prescription-delivery',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-healthcare.webp',
        width: 1200,
        height: 630,
        alt: 'The Future of Telemedicine & Online Prescription Delivery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Telemedicine & Online Prescription Delivery',
    description:
      'Explore how telemedicine and prescription delivery are transforming healthcare with convenience, speed, and digital innovation.',
    images: ['/images/blog-healthcare.webp'],
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
  return <CompHealthcare />
};

export default page;
