import React from "react";
import CompFullStackDevelopment from "./CompFullStackDevelopment";

export const metadata = {
  title: 'How Full Stack Development Connects Frontend, Backend & Business Strategy',
  description: 'Learn how full stack development connects frontend, backend, and cloud to create scalable business solutions. Book a free software consultation.',
  openGraph: {
    title: 'How Full Stack Development Connects Frontend, Backend & Business Strategy',
    description:
      'Learn how full stack development connects frontend, backend, and cloud to create scalable business solutions. Book a free software consultation.',
    url: 'https://www.universalstreamsolution.com/blog/frontend-to-backend-full-stack-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-full-stack-development.webp',
        width: 1200,
        height: 630,
        alt: 'How Full Stack Development Connects Frontend, Backend & Business Strategy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Full Stack Development Connects Frontend, Backend & Business Strategy',
    description:
      'Learn how full stack development connects frontend, backend, and cloud to create scalable business solutions. Book a free software consultation.',
    images: ['/images/blog-full-stack-development.webp'],
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
  return <CompFullStackDevelopment />
};

export default page;
