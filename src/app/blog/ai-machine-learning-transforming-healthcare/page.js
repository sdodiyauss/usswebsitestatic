import React from "react";
import CompBlogAIAndMachineLearning from "./CompBlogAIAndMachineLearning";

export const metadata = {
  title: 'AI and Machine Learning Transforming Healthcare',
  description: 'Discover how AI and ML are revolutionizing healthcare with predictive analytics, telemedicine, and digital pharmacies.',
   openGraph: {
    title: 'AI and Machine Learning Transforming Healthcare',
    description:
      'Discover how AI and ML are revolutionizing healthcare with predictive analytics, telemedicine, and digital pharmacies.',
    url: 'https://www.universalstreamsolution.com/blog/ai-machine-learning-transforming-healthcare',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ai-and-ml.webp',
        width: 1200,
        height: 630,
        alt: 'AI and Machine Learning Transforming Healthcare',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI and Machine Learning Transforming Healthcare',
    description:
      'Discover how AI and ML are revolutionizing healthcare with predictive analytics, telemedicine, and digital pharmacies.',
    images: ['/images/blog-ai-and-ml.webp'],
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
  return <CompBlogAIAndMachineLearning />
};

export default page;
