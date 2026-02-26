import React from "react";
import CompCareer from "./CompCareer";

export const metadata = {
  title: 'Join Our Team | Careers at Universal Stream Solution',
  description: 'Discover growth, learning, and innovation. Join a team where your ideas matter. Start your journey with Universal Stream Solution today.',
   openGraph: {
    title: 'Join Our Team | Careers at Universal Stream Solution',
    description:
      'Discover growth, learning, and innovation. Join a team where your ideas matter. Start your journey with Universal Stream Solution today.',
    url: 'https://www.universalstreamsolution.com/career',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/who-we-are.webp',
        width: 1200,
        height: 630,
        alt: 'Join Our Team | Careers at Universal Stream Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Our Team | Careers at Universal Stream Solution',
    description:
      'Discover growth, learning, and innovation. Join a team where your ideas matter. Start your journey with Universal Stream Solution today.',
    images: ['/images/who-we-are.webp'],
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
  return <CompCareer />
};

export default page;
