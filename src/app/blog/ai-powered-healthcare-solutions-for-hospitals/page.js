import React from "react";
import CompAIPoweredHealthcareSolution from "./CompAIPoweredHealthcareSolution";

export const metadata = {
  title: 'AI-Powered Healthcare Solutions Every Hospital Needs | USS',
  description: 'Discover AI-powered healthcare solutions that help hospitals improve patient care, automate workflows, reduce costs, and accelerate digital transformation.',
  openGraph: {
    title: 'AI-Powered Healthcare Solutions Every Hospital Needs | USS',
    description:
      'Discover AI-powered healthcare solutions that help hospitals improve patient care, automate workflows, reduce costs, and accelerate digital transformation.',
    url: 'https://www.universalstreamsolution.com/blog/top-career-skills-companies-will-value-in-2026',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ai-powered-healthcare-solution.webp',
        width: 1200,
        height: 630,
        alt: 'AI-Powered Healthcare Solutions Every Hospital Needs | USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Healthcare Solutions Every Hospital Needs | USS',
    description:
      'Discover AI-powered healthcare solutions that help hospitals improve patient care, automate workflows, reduce costs, and accelerate digital transformation.',
    images: ['/images/blog-ai-powered-healthcare-solution.webp'],
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
  return <CompAIPoweredHealthcareSolution />
};

export default page;
