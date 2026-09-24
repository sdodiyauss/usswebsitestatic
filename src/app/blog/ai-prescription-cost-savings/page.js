import React from "react";
import CompAIPrescriptionCostSavings from "./CompAIPrescriptionCostSavings";

export const metadata = {
  title: 'The Role of AI in Prescription Cost Savings | USS',
  description: 'Discover how AI can reduce prescription costs through price comparison, assistance programs, digital pharmacies, and personalized savings opportunities.',
  openGraph: {
    title: 'The Role of AI in Prescription Cost Savings | USS',
    description:
      'Discover how AI can reduce prescription costs through price comparison, assistance programs, digital pharmacies, and personalized savings opportunities.',
    url: 'https://www.universalstreamsolution.com/blog/ai-prescription-cost-savings',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ai-prescription-cost-savings.webp',
        width: 1200,
        height: 630,
        alt: 'The Role of AI in Prescription Cost Savings | USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Role of AI in Prescription Cost Savings | USS',
    description:
      'Discover how AI can reduce prescription costs through price comparison, assistance programs, digital pharmacies, and personalized savings opportunities.',
    images: ['/images/blog-ai-prescription-cost-savings.webp'],
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
  return <CompAIPrescriptionCostSavings />
};

export default page;
