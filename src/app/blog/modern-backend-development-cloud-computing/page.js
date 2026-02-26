import React from "react";
import CompBackendDevCloudComputing from "./CompBackendDevCloudComputing";

export const metadata = {
  title: 'Modern Backend Development in the Cloud Era | Scalable & Secure Solutions',
  description: 'Explore how modern backend development leverages cloud computing, microservices, serverless architecture, and DevOps to build scalable, secure, and future-ready applications.',
   openGraph: {
    title: 'Modern Backend Development in the Cloud Era | Scalable & Secure Solutions',
    description:
      'Explore how modern backend development leverages cloud computing, microservices, serverless architecture, and DevOps to build scalable, secure, and future-ready applications.',
    url: 'https://www.universalstreamsolution.com/blog/modern-backend-development-cloud-computing',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-backend-dev-cloud-computing.webp',
        width: 1200,
        height: 630,
        alt: 'Modern Backend Development in the Cloud Era | Scalable & Secure Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Backend Development in the Cloud Era | Scalable & Secure Solutions',
    description:
      'Explore how modern backend development leverages cloud computing, microservices, serverless architecture, and DevOps to build scalable, secure, and future-ready applications.',
    images: ['/images/blog-backend-dev-cloud-computing.webp'],
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
  return <CompBackendDevCloudComputing />
};

export default page;
