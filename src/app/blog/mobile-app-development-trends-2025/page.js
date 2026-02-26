import React from "react";
import CompMobileAppDev from "./CompMobileAppDev";

export const metadata = {
  title: 'Top Mobile App Development Trends to Watch in 2025',
  description: 'Discover the key mobile app development trends shaping 2025, from AI-driven personalization to 5G, AR/VR, blockchain, and human-centric app experiences.',
  openGraph: {
    title: 'Top Mobile App Development Trends to Watch in 2025',
    description:
      'Discover the key mobile app development trends shaping 2025, from AI-driven personalization to 5G, AR/VR, blockchain, and human-centric app experiences.',
    url: 'https://www.universalstreamsolution.com/blog/mobile-app-development-trends-2025',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/top-mobile-app-dev.webp',
        width: 1200,
        height: 630,
        alt: 'Top Mobile App Development Trends to Watch in 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Mobile App Development Trends to Watch in 2025',
    description:
      'Discover the key mobile app development trends shaping 2025, from AI-driven personalization to 5G, AR/VR, blockchain, and human-centric app experiences.',
    images: ['/images/top-mobile-app-dev.webp'],
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
  return <CompMobileAppDev />
};

export default page;
