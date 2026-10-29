import React from "react";
import CompMongodbVSSql from "./CompMongodbVSSql";

export const metadata = {
  title: 'MongoDB vs SQL: Which Database Is Right for Your Business?',
  description: 'Compare MongoDB vs SQL databases, their key differences, benefits, use cases, and how to choose the right database for your business application.',
  openGraph: {
    title: 'MongoDB vs SQL: Which Database Is Right for Your Business?',
    description:
      'Compare MongoDB vs SQL databases, their key differences, benefits, use cases, and how to choose the right database for your business application.',
    url: 'https://www.universalstreamsolution.com/blog/mongodb-vs-sql-which-database-is-right',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-mongodb-vs-sql.webp',
        width: 1200,
        height: 630,
        alt: 'MongoDB vs SQL: Which Database Is Right for Your Business?',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MongoDB vs SQL: Which Database Is Right for Your Business?',
    description:
      'Compare MongoDB vs SQL databases, their key differences, benefits, use cases, and how to choose the right database for your business application.',
    images: ['/images/blog-mongodb-vs-sql.webp'],
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
  return <CompMongodbVSSql />
};

export default page;
