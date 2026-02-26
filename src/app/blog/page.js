import React from "react";
import CompBlog from "./CompBlog";

export const metadata = {
  title: 'USS Blog – Insights, Tips & Tech Updates',
  description: 'Explore the USS blog for expert insights, industry trends, and actionable tips on tech, innovation, and business growth.',
  openGraph: {
    title: 'USS Blog – Insights, Tips & Tech Updates',
    description:
      'Explore the USS blog for expert insights, industry trends, and actionable tips on tech, innovation, and business growth.',
    url: 'https://www.universalstreamsolution.com/blog',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-healthcare.webp',
        width: 1200,
        height: 630,
        alt: 'USS Blog – Insights, Tips & Tech Updates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USS Blog – Insights, Tips & Tech Updates',
    description:
      'Explore the USS blog for expert insights, industry trends, and actionable tips on tech, innovation, and business growth.',
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
  return <CompBlog />
};

export default page;
