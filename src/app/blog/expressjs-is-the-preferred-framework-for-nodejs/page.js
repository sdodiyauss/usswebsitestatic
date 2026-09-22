import React from "react";
import CompExpressForNodeJS from "./CompExpressForNodeJS";

export const metadata = {
  title: 'Why Express.js Is the Preferred Framework for Node.js Development',
  description: 'Discover why Express.js is a great choice for Node.js development. Explore its flexibility, scalability, simplicity, middleware, and API development capabilities.',
  openGraph: {
    title: 'Why Express.js Is the Preferred Framework for Node.js Development',
    description:
      'Discover why Express.js is a great choice for Node.js development. Explore its flexibility, scalability, simplicity, middleware, and API development capabilities.',
    url: 'https://www.universalstreamsolution.com/blog/expressjs-is-the-preferred-framework-for-nodejs',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-expressjs-for-nodejs.webp',
        width: 1200,
        height: 630,
        alt: 'Why Express.js Is the Preferred Framework for Node.js Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Express.js Is the Preferred Framework for Node.js Development',
    description:
      'Discover why Express.js is a great choice for Node.js development. Explore its flexibility, scalability, simplicity, middleware, and API development capabilities.',
    images: ['/images/blog-expressjs-for-nodejs.webp'],
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
  return <CompExpressForNodeJS />
};

export default page;
