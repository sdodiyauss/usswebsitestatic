
import React from "react";
import CompAboutUs from "./CompAboutUs";

export const metadata = {
  title: 'About Us | USS - Software Development Company',
  description: 'Learn about USS, a software development company offering IT services and digital solutions to startups and enterprises worldwide.',
  openGraph: {
    title: 'About Us | USS - Software Development Company',
    description:
      'Learn about USS, a software development company offering IT services and digital solutions to startups and enterprises worldwide.',
    url: 'https://www.universalstreamsolution.com/about-us',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/about-banner.webp',
        width: 1200,
        height: 630,
        alt: 'About Us | USS - Software Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | USS - Software Development Company',
    description:
      'Learn about USS, a software development company offering IT services and digital solutions to startups and enterprises worldwide.',
    images: ['/images/about-banner.webp'],
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
  return <CompAboutUs />
};

export default page;
