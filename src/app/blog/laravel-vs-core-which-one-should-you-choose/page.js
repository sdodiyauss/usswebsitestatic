import React from "react";
import CompLaravlVSCore from "./CompLaravlVSCore";

export const metadata = {
  title: 'Laravel vs Core PHP: Which One Should You Choose?',
  description: 'Confused between Laravel and Core PHP? Compare features, benefits, performance, development time, and use cases to choose the right option for your project.',
  openGraph: {
    title: 'Laravel vs Core PHP: Which One Should You Choose?',
    description:
      'Confused between Laravel and Core PHP? Compare features, benefits, performance, development time, and use cases to choose the right option for your project. ',
    url: 'https://www.universalstreamsolution.com/blog/laravel-vs-core-which-one-should-you-choose',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-laravel-vs-core-php.webp',
        width: 1200,
        height: 630,
        alt: 'Laravel vs Core PHP: Which One Should You Choose?',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laravel vs Core PHP: Which One Should You Choose?',
    description:
      'Confused between Laravel and Core PHP? Compare features, benefits, performance, development time, and use cases to choose the right option for your project. ',
    images: ['/images/blog-laravel-vs-core-php.webp'],
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
  return <CompLaravlVSCore />
};

export default page;
