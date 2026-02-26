import React from "react";
import CompAICustomSoftwareDevelopment from "./CompAICustomSoftwareDevelopment";

export const metadata = {
  title: 'How AI is Revolutionizing Custom Software Development',
  description: 'Explore how AI transforms custom software development. From faster coding to smarter user experiences, discover the key benefits of AI-powered solutions. ',
  openGraph: {
    title: 'How AI is Revolutionizing Custom Software Development',
    description:
      'Explore how AI transforms custom software development. From faster coding to smarter user experiences, discover the key benefits of AI-powered solutions. ',
    url: 'https://www.universalstreamsolution.com/blog/ai-powered-custom-software-solutions',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-image-ai-powered-custom-software-solutions.webp',
        width: 1200,
        height: 630,
        alt: 'How AI is Revolutionizing Custom Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AI is Revolutionizing Custom Software Development',
    description:
      'Explore how AI transforms custom software development. From faster coding to smarter user experiences, discover the key benefits of AI-powered solutions. ',
    images: ['/images/blog-image-ai-powered-custom-software-solutions.webp'],
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
  return <CompAICustomSoftwareDevelopment />
};

export default page;
