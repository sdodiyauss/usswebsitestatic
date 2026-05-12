import React from "react";
import CompUIUXimmersiveTrend from "./CompUIUXimmersiveTrend";

export const metadata = {
  title: 'Top Immersive UI/UX Trends Transforming Web & Mobile Interfaces',
  description: 'Explore immersive web and mobile UI/UX trends, including AR, motion design, and dark mode. Learn how developers can build engaging digital experiences.',
  openGraph: {
    title: 'Top Immersive UI/UX Trends Transforming Web & Mobile Interfaces',
    description:
      'Explore immersive web and mobile UI/UX trends, including AR, motion design, and dark mode. Learn how developers can build engaging digital experiences.',
    url: 'https://www.universalstreamsolution.com/blog/ui-ux-immersive-experience-trends',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ui-ux-immersive-trend.webp',
        width: 1200,
        height: 630,
        alt: 'Top Immersive UI/UX Trends Transforming Web & Mobile Interfaces',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Immersive UI/UX Trends Transforming Web & Mobile Interfaces',
    description:
      'Explore immersive web and mobile UI/UX trends, including AR, motion design, and dark mode. Learn how developers can build engaging digital experiences.',
    images: ['/images/blog-ui-ux-immersive-trend.webp'],
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
  return <CompUIUXimmersiveTrend />
};

export default page;
