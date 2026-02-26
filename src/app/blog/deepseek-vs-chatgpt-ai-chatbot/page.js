import React from "react";
import CompBlogDeepseekChatgpt from "./CompBlogDeepseekChatgpt";

export const metadata = {
  title: 'DeepSeek vs ChatGPT: AI Chatbot Comparison',
  description: 'Compare DeepSeek and ChatGPT in this detailed guide. Explore features, performance, and which AI chatbot fits your needs best.',
   openGraph: {
    title: 'DeepSeek vs ChatGPT: AI Chatbot Comparison',
    description:
      'Compare DeepSeek and ChatGPT in this detailed guide. Explore features, performance, and which AI chatbot fits your needs best.',
    url: 'https://www.universalstreamsolution.com/blog/deepseek-vs-chatgpt-ai-chatbot',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ai.webp',
        width: 1200,
        height: 630,
        alt: 'DeepSeek vs ChatGPT: AI Chatbot Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepSeek vs ChatGPT: AI Chatbot Comparison',
    description:
      'Compare DeepSeek and ChatGPT in this detailed guide. Explore features, performance, and which AI chatbot fits your needs best.',
    images: ['/images/blog-ai.webp'],
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
  return <CompBlogDeepseekChatgpt />
};

export default page;
