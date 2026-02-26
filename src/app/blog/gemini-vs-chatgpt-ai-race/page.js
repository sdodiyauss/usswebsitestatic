import React from "react";
import CompGeminiVSGpt from "./CompGeminiVSGpt";

export const metadata = {
  title: 'Gemini 1.5 vs ChatGPT 5: AI Showdown 2025 – Who’s Ahead?',
  description: 'Discover the ultimate AI face-off between Google’s Gemini 1.5 and OpenAI’s ChatGPT 5. Compare features, performance, and real-world impact to see which AI model is leading the race in 2025.',
  openGraph: {
    title: 'Gemini 1.5 vs ChatGPT 5: AI Showdown 2025 – Who’s Ahead?',
    description:
      'Discover the ultimate AI face-off between Google’s Gemini 1.5 and OpenAI’s ChatGPT 5. Compare features, performance, and real-world impact to see which AI model is leading the race in 2025.',
    url: 'https://www.universalstreamsolution.com/blog/gemini-vs-chatgpt-ai-race',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-gemini-vs-gpt.webp',
        width: 1200,
        height: 630,
        alt: 'Gemini 1.5 vs ChatGPT 5: AI Showdown 2025 – Who’s Ahead?',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemini 1.5 vs ChatGPT 5: AI Showdown 2025 – Who’s Ahead?',
    description:
      'Discover the ultimate AI face-off between Google’s Gemini 1.5 and OpenAI’s ChatGPT 5. Compare features, performance, and real-world impact to see which AI model is leading the race in 2025.',
    images: ['/images/blog-gemini-vs-gpt.webp'],
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
  return <CompGeminiVSGpt />
};

export default page;
