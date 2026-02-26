import React from "react";
import CompFutureOfAIResearch from "./CompFutureOfAIResearch";

export const metadata = {
  title: 'Future of AI Research: Key Trends, Innovations & Predictions',
  description: 'Explore the future of AI research, key trends, emerging technologies, challenges, and predictions shaping artificial intelligence innovation worldwide.',
  openGraph: {
    title: 'Future of AI Research: Key Trends, Innovations & Predictions',
    description:
      'Explore the future of AI research, key trends, emerging technologies, challenges, and predictions shaping artificial intelligence innovation worldwide.',
    url: 'https://www.universalstreamsolution.com/blog/future-of-ai-research-trends-predictions',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-future-of-ai-research.webp',
        width: 1200,
        height: 630,
        alt: 'Future of AI Research: Key Trends, Innovations & Predictions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future of AI Research: Key Trends, Innovations & Predictions',
    description:
      'Explore the future of AI research, key trends, emerging technologies, challenges, and predictions shaping artificial intelligence innovation worldwide.',
    images: ['/images/blog-future-of-ai-research.webp'],
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
  return <CompFutureOfAIResearch />
};

export default page;
