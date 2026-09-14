import React from "react";
import CompWPdevVSReadyMadeTheme from "./CompWPdevVSReadyMadeTheme";

export const metadata = {
  title: 'Custom WordPress Development VS Ready-Made Themes',
  description: 'Compare WordPress custom development and ready-made themes to find the best option for your business based on cost, design, performance, and usage.',
  openGraph: {
    title: 'Custom WordPress Development VS Ready-Made Themes',
    description:
      'Compare WordPress custom development and ready-made themes to find the best option for your business based on cost, design, performance, and usage.',
    url: 'https://www.universalstreamsolution.com/blog/custom-wordpress-development-vs-ready-made-themes',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-custom-wordpress-development-vs-ready-made-themes.webp',
        width: 1200,
        height: 630,
        alt: 'Custom WordPress Development VS Ready-Made Themes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom WordPress Development VS Ready-Made Themes',
    description:
      'Compare WordPress custom development and ready-made themes to find the best option for your business based on cost, design, performance, and usage.',
    images: ['/images/blog-custom-wordpress-development-vs-ready-made-themes.webp'],
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
  return <CompWPdevVSReadyMadeTheme />
};

export default page;
