import React from "react";
import CompSaveMoneyOnExpensiveMedi from "./CompSaveMoneyOnExpensiveMedi";

export const metadata = {
  title: 'How to Save on Expensive Medications with Online Prescription Assistance',
  description: 'Learn how online prescription assistance platforms help patients save on expensive medications through discounts, price comparisons, and digital prescription management tools. ',
  openGraph: {
    title: 'How to Save on Expensive Medications with Online Prescription Assistance',
    description:
      'Learn how online prescription assistance platforms help patients save on expensive medications through discounts, price comparisons, and digital prescription management tools. ',
    url: 'https://www.universalstreamsolution.com/blog/save-money-on-expensive-medications-online-prescription-assistance',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-save-money-on-expensive-medi.webp',
        width: 1200,
        height: 630,
        alt: 'How to Save on Expensive Medications with Online Prescription Assistance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Save on Expensive Medications with Online Prescription Assistance',
    description:
      'Learn how online prescription assistance platforms help patients save on expensive medications through discounts, price comparisons, and digital prescription management tools. ',
    images: ['/images/blog-save-money-on-expensive-medi.webp'],
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
  return <CompSaveMoneyOnExpensiveMedi />
};

export default page;
