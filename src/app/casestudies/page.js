import React from "react";
import CompCasestudies from "./CompCasestudies";

export const metadata = {
  title: 'Custom Software Case Studies | USS Projects',
  description: 'Explore real-world projects where USS delivered scalable, smart IT solutions that drive business growth.',
  openGraph: {
    title: 'Custom Software Case Studies | USS Projects',
    description:
      'Explore real-world projects where USS delivered scalable, smart IT solutions that drive business growth.',
    url: 'https://www.universalstreamsolution.com/casestudies',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/casestudies-project1.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Software Case Studies | USS Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Case Studies | USS Projects',
    description:
      'Explore real-world projects where USS delivered scalable, smart IT solutions that drive business growth.',
    images: ['/images/casestudies-project1.webp'],
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
  return <CompCasestudies />
};

export default page;
