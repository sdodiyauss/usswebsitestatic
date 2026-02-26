import React from "react";
import CompMobileAppDevelopment from "./CompMobileAppDevelopment";

export const metadata = {
  title: 'Why Flutter Is the MVP King in 2025',
  description: 'Discover why Flutter continues to dominate MVP development in 2025 with speed, flexibility, and cross-platform efficiency.',
   openGraph: {
    title: 'Why Flutter Is the MVP King in 2025',
    description:
      'Discover why Flutter continues to dominate MVP development in 2025 with speed, flexibility, and cross-platform efficiency.',
    url: 'https://www.universalstreamsolution.com/blog/flutter-mvp-king-2025',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-appdevelopment.webp',
        width: 1200,
        height: 630,
        alt: 'Why Flutter Is the MVP King in 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Flutter Is the MVP King in 2025',
    description:
      'Discover why Flutter continues to dominate MVP development in 2025 with speed, flexibility, and cross-platform efficiency.',
    images: ['/images/blog-appdevelopment.webp'],
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
  return <CompMobileAppDevelopment />
};

export default page;
