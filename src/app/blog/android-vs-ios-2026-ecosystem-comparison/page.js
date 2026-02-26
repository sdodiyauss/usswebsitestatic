import React from "react";
import CompAndroidVSIos from "./CompAndroidVSIos";

export const metadata = {
  title: 'Android vs iOS in 2026: Which Mobile Ecosystem Wins?',
  description: 'Explore the ultimate Android vs iOS comparison in 2026. Discover market share, AI integration, user experience, security, hardware, app development opportunities, and future trends to find which mobile ecosystem suits your needs.',
  openGraph: {
    title: 'Android vs iOS in 2026: Which Mobile Ecosystem Wins?',
    description:
      'Explore the ultimate Android vs iOS comparison in 2026. Discover market share, AI integration, user experience, security, hardware, app development opportunities, and future trends to find which mobile ecosystem suits your needs.',
    url: 'https://www.universalstreamsolution.com/blog/android-vs-ios-2026-ecosystem-comparison',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-androidVSios2026.webp',
        width: 1200,
        height: 630,
        alt: 'Android vs iOS in 2026: Which Mobile Ecosystem Wins?',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android vs iOS in 2026: Which Mobile Ecosystem Wins?',
    description:
      'Explore the ultimate Android vs iOS comparison in 2026. Discover market share, AI integration, user experience, security, hardware, app development opportunities, and future trends to find which mobile ecosystem suits your needs.',
    images: ['/images/blog-androidVSios2026.webp'],
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
  return <CompAndroidVSIos />
};

export default page;
