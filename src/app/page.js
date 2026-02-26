import React from "react";
import CompHome from "./CompHome";

export const metadata = {
  title: 'Custom Software Development Company | USS IT Services',
  description:
    'Discover USS, a custom software development company offering IT services, digital transformation, and product development for startups and enterprises.',
  alternates: {
    canonical: 'https://www.universalstreamsolution.com/',
  },
  openGraph: {
    title: 'Custom Software Development Company | USS IT Services',
    description:
      'Discover USS, a custom software development company offering IT services, digital transformation, and product development for startups and enterprises.',
    url: 'https://www.universalstreamsolution.com/',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'USS IT Services - Custom Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Company | USS IT Services',
    description:
      'Discover USS, a custom software development company offering IT services, digital transformation, and product development for startups and enterprises.',
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
  return <CompHome />
};

export default page;
