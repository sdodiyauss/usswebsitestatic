import React from "react";
import CompNodejsInTrends from "./CompNodejsInTrends";

export const metadata = {
  title: 'Node.js in 2026: Latest Trends, Changes & Skills Developers Must Learn',
  description: 'Discover how Node.js has evolved in 2026 with TypeScript adoption, AI-assisted development, serverless architecture, microservices, and modern enterprise practices. Learn what developers must master to stay competitive in the changing backend ecosystem.',
  openGraph: {
    title: 'Node.js in 2026: Latest Trends, Changes & Skills Developers Must Learn',
    description:
      'Discover how Node.js has evolved in 2026 with TypeScript adoption, AI-assisted development, serverless architecture, microservices, and modern enterprise practices. Learn what developers must master to stay competitive in the changing backend ecosystem.',
    url: 'https://www.universalstreamsolution.com/blog/nodejs-in-2026-trends-changes-skills',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-nodejs-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Node.js in 2026: Latest Trends, Changes & Skills Developers Must Learn',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Node.js in 2026: Latest Trends, Changes & Skills Developers Must Learn',
    description:
      'Discover how Node.js has evolved in 2026 with TypeScript adoption, AI-assisted development, serverless architecture, microservices, and modern enterprise practices. Learn what developers must master to stay competitive in the changing backend ecosystem.',
    images: ['/images/blog-nodejs-2026.webp'],
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
  return <CompNodejsInTrends />
};

export default page;
