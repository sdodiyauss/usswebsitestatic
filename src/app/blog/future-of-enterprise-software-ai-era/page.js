import React from "react";
import CompFutureOfEnterpriseSoftware from "./CompFutureOfEnterpriseSoftware";

export const metadata = {
  title: 'The Future of Enterprise Software in the AI Era',
  description: 'Discover how AI is transforming enterprise software through intelligent automation, AI agents, predictive analytics, and smarter business decision-making.',
  openGraph: {
    title: 'The Future of Enterprise Software in the AI Era',
    description:
      'Discover how AI is transforming enterprise software through intelligent automation, AI agents, predictive analytics, and smarter business decision-making.',
    url: 'https://www.universalstreamsolution.com/blog/future-of-enterprise-software-ai-era',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-future-of-enterprise-software.webp',
        width: 1200,
        height: 630,
        alt: 'The Future of Enterprise Software in the AI Era',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Enterprise Software in the AI Era',
    description:
      'Discover how AI is transforming enterprise software through intelligent automation, AI agents, predictive analytics, and smarter business decision-making.',
    images: ['/images/blog-future-of-enterprise-software.webp'],
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
  return <CompFutureOfEnterpriseSoftware />
};

export default page;
