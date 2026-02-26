import React from "react";
import CompSmallBusinessesSurvive from "./CompSmallBusinessesSurvive";

export const metadata = {
  title: 'How Small Businesses Survive Without Big Budgets',
  description: 'Discover practical strategies small businesses use to grow sustainably without big budgets, including smart planning, lean operations, and digital efficiency.',
  openGraph: {
    title: 'How Small Businesses Survive Without Big Budgets',
    description:
      'Discover practical strategies small businesses use to grow sustainably without big budgets, including smart planning, lean operations, and digital efficiency.',
    url: 'https://www.universalstreamsolution.com/blog/how-small-businesses-survive-without-big-budgets',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-small-businesses.webp',
        width: 1200,
        height: 630,
        alt: 'How Small Businesses Survive Without Big Budgets',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Small Businesses Survive Without Big Budgets',
    description:
      'Discover practical strategies small businesses use to grow sustainably without big budgets, including smart planning, lean operations, and digital efficiency.',
    images: ['/images/blog-small-businesses.webp'],
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
  return <CompSmallBusinessesSurvive />
};

export default page;
