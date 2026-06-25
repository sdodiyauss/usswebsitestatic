import React from "react";
import CompRebrandVSRefresh from "./CompRebrandVSRefresh";

export const metadata = {
  title: 'Rebranding vs Refreshing: Which One Does Your Business Need?',
  description: 'Discover the key differences between rebranding and brand refreshing. Learn when your business needs a complete rebrand or a strategic refresh to stay competitive and drive growth.',
  openGraph: {
    title: 'Rebranding vs Refreshing: Which One Does Your Business Need?',
    description:
      'Discover the key differences between rebranding and brand refreshing. Learn when your business needs a complete rebrand or a strategic refresh to stay competitive and drive growth.',
    url: 'https://www.universalstreamsolution.com/blog/rebrand-or-refresh-your-business',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-rebranding-vs-refreshing.webp',
        width: 1200,
        height: 630,
        alt: 'Rebranding vs Refreshing: Which One Does Your Business Need?',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rebranding vs Refreshing: Which One Does Your Business Need?',
    description:
      'Discover the key differences between rebranding and brand refreshing. Learn when your business needs a complete rebrand or a strategic refresh to stay competitive and drive growth.',
    images: ['/images/blog-rebranding-vs-refreshing.webp'],
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
  return <CompRebrandVSRefresh />
};

export default page;
