import React from "react";
import CompAIHealthcareOpportunities from "./CompAIHealthcareOpportunities";

export const metadata = {
  title: 'The Future of AI in Healthcare: Trends & Innovations',
  description: 'Discover how AI is transforming healthcare through smarter diagnostics, personalized care, telemedicine, and innovative healthcare solutions.',
  openGraph: {
    title: 'The Future of AI in Healthcare: Trends & Innovations',
    description:
      'Discover how AI is transforming healthcare through smarter diagnostics, personalized care, telemedicine, and innovative healthcare solutions.',
    url: 'https://www.universalstreamsolution.com/blog/future-ai-healthcare-opportunities-challenges-innovations',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-future-ai-healthcare-opportunities.webp',
        width: 1200,
        height: 630,
        alt: 'The Future of AI in Healthcare: Trends & Innovations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of AI in Healthcare: Trends & Innovations',
    description:
      'Discover how AI is transforming healthcare through smarter diagnostics, personalized care, telemedicine, and innovative healthcare solutions.',
    images: ['/images/blog-future-ai-healthcare-opportunities.webp'],
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
  return <CompAIHealthcareOpportunities />
};

export default page;
