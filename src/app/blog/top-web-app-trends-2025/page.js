import React from "react";
import CompWebAppDev from "./CompWebAppDev";

export const metadata = {
  title: 'Top Web App Development Trends 2025 | Scalable & Engaging Apps',
  description: 'Discover top web app development trends for 2025: AI, PWAs, Python frameworks, serverless architecture & expert services to boost growth and engagement.',
  openGraph: {
    title: 'Top Web App Development Trends 2025 | Scalable & Engaging Apps',
    description:
      'Discover top web app development trends for 2025: AI, PWAs, Python frameworks, serverless architecture & expert services to boost growth and engagement.',
    url: 'https://www.universalstreamsolution.com/blog/top-web-app-trends-2025',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-web-dev.webp',
        width: 1200,
        height: 630,
        alt: 'Top Web App Development Trends 2025 | Scalable & Engaging Apps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Web App Development Trends 2025 | Scalable & Engaging Apps',
    description:
      'Discover top web app development trends for 2025: AI, PWAs, Python frameworks, serverless architecture & expert services to boost growth and engagement.',
    images: ['/images/blog-web-dev.webp'],
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
  return <CompWebAppDev />
};

export default page;
