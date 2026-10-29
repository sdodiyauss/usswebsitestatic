import React from "react";
import CompTechnologyInfrastructure from "./CompTechnologyInfrastructure";

export const metadata = {
  title: 'How to Build a Future-Ready Technology Infrastructure | Complete Guide',
  description: 'Learn how to build a future-ready technology infrastructure with cloud, cybersecurity, automation, AI, and scalable architecture to support long-term business growth.',
  openGraph: {
    title: 'How to Build a Future-Ready Technology Infrastructure | Complete Guide',
    description:
      'Learn how to build a future-ready technology infrastructure with cloud, cybersecurity, automation, AI, and scalable architecture to support long-term business growth.',
    url: 'https://www.universalstreamsolution.com/blog/future-ready-technology-infrastructure',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-future-technology-infrastructure.webp',
        width: 1200,
        height: 630,
        alt: 'How to Build a Future-Ready Technology Infrastructure | Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build a Future-Ready Technology Infrastructure | Complete Guide',
    description:
      'Learn how to build a future-ready technology infrastructure with cloud, cybersecurity, automation, AI, and scalable architecture to support long-term business growth.',
    images: ['/images/blog-future-technology-infrastructure.webp'],
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
  return <CompTechnologyInfrastructure />
};

export default page;
