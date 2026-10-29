import React from "react";
import CompAIScriblingHelp from "./CompAIScriblingHelp";

export const metadata = {
  title: 'AI Scribing Helps Healthcare Staff Spend Less Time on Documentation',
  description: 'AI scribing helps healthcare staff reduce documentation time and spend more time focusing on patient care with AI-powered medical software.',
  openGraph: {
    title: 'AI Scribing Helps Healthcare Staff Spend Less Time on Documentation',
    description:
      'AI scribing helps healthcare staff reduce documentation time and spend more time focusing on patient care with AI-powered medical software.',
    url: 'https://www.universalstreamsolution.com/blog/ai-scribing-helps-healthcare-staff',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-how-ai-scribing-helps-healthcare-staff.webp',
        width: 1200,
        height: 630,
        alt: 'AI Scribing Helps Healthcare Staff Spend Less Time on Documentation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scribing Helps Healthcare Staff Spend Less Time on Documentation',
    description:
      'AI scribing helps healthcare staff reduce documentation time and spend more time focusing on patient care with AI-powered medical software.',
    images: ['/images/blog-how-ai-scribing-helps-healthcare-staff.webp'],
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
  return <CompAIScriblingHelp />
};

export default page;
