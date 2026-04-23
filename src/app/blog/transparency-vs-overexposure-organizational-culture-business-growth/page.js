import React from "react";
import CompTransparencyVSOverexposure from "./CompTransparencyVSOverexposure";

export const metadata = {
  title: 'Transparency vs Overexposure: Building Trust & Organizational Culture in Modern Workplaces',
  description: 'Explore how transparency impacts organizational culture and the role of technology in business growth. Learn to balance communication and build lasting workplace trust.',
  openGraph: {
    title: 'Transparency vs Overexposure: Building Trust & Organizational Culture in Modern Workplaces',
    description:
      'Explore how transparency impacts organizational culture and the role of technology in business growth. Learn to balance communication and build lasting workplace trust.',
    url: 'https://www.universalstreamsolution.com/blog/transparency-vs-overexposure-organizational-culture-business-growth',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-transparency-or-overexposure.webp',
        width: 1200,
        height: 630,
        alt: 'Transparency vs Overexposure: Building Trust & Organizational Culture in Modern Workplaces',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparency vs Overexposure: Building Trust & Organizational Culture in Modern Workplaces',
    description:
      'Explore how transparency impacts organizational culture and the role of technology in business growth. Learn to balance communication and build lasting workplace trust.',
    images: ['/images/blog-transparency-or-overexposure.webp'],
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
  return <CompTransparencyVSOverexposure />
};

export default page;
