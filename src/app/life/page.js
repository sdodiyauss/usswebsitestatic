import React from "react";
import CompLife from "./CompLife";

export const metadata = {
  title: 'Life at USS – Culture, Careers & Team Spirit',
  description: 'Discover what its like to work at USS. Explore our vibrant culture, team stories, growth opportunities, and what makes our workplace truly unique.',
  openGraph: {
    title: 'Life at USS – Culture, Careers & Team Spirit',
    description:
      'Discover what its like to work at USS. Explore our vibrant culture, team stories, growth opportunities, and what makes our workplace truly unique.',
    url: 'https://www.universalstreamsolution.com/life',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/delhitripimg1.webp',
        width: 1200,
        height: 630,
        alt: 'Life at USS – Culture, Careers & Team Spirit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life at USS – Culture, Careers & Team Spirit',
    description:
      'Discover what its like to work at USS. Explore our vibrant culture, team stories, growth opportunities, and what makes our workplace truly unique.',
    images: ['/images/delhitripimg1.webp'],
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
  return <CompLife />
};

export default page;
