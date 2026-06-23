import React from "react";
import CompAIFraudDetection from "./CompAIFraudDetection";

export const metadata = {
  title: 'The Future of Fintech Security: How AI Detects and Prevents Fraud in Real Time.',
  description: 'Discover how AI is revolutionizing fraud detection in fintech through machine learning, behavioral analytics, real-time monitoring, and identity verification. Learn the benefits, challenges, and future trends shaping financial security.',
  openGraph: {
    title: 'The Future of Fintech Security: How AI Detects and Prevents Fraud in Real Time.',
    description:
      'Discover how AI is revolutionizing fraud detection in fintech through machine learning, behavioral analytics, real-time monitoring, and identity verification. Learn the benefits, challenges, and future trends shaping financial security.',
    url: 'https://www.universalstreamsolution.com/blog/ai-fraud-detection-in-fintech',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ai-fraud-detection.webp',
        width: 1200,
        height: 630,
        alt: 'The Future of Fintech Security: How AI Detects and Prevents Fraud in Real Time.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Fintech Security: How AI Detects and Prevents Fraud in Real Time.',
    description:
      'Discover how AI is revolutionizing fraud detection in fintech through machine learning, behavioral analytics, real-time monitoring, and identity verification. Learn the benefits, challenges, and future trends shaping financial security.',
    images: ['/images/blog-ai-fraud-detection.webp'],
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
  return <CompAIFraudDetection />
};

export default page;
