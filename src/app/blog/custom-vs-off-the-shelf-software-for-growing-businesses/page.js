import React from "react";
import CompSoftwareForGrowingBusiness from "./CompSoftwareForGrowingBusiness";

export const metadata = {
  title: 'Custom vs Off-the-Shelf Software: What Growing Businesses Should Choose',
  description: 'Discover the difference between custom and off-the-shelf software. Learn which solution is best for scalability, flexibility, and business growth in 2025. ',
  openGraph: {
    title: 'Custom vs Off-the-Shelf Software: What Growing Businesses Should Choose',
    description:
      'Discover the difference between custom and off-the-shelf software. Learn which solution is best for scalability, flexibility, and business growth in 2025. ',
    url: 'https://www.universalstreamsolution.com/blog/custom-vs-off-the-shelf-software-for-growing-businesses',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-software-for-growing-business.webp',
        width: 1200,
        height: 630,
        alt: 'Custom vs Off-the-Shelf Software: What Growing Businesses Should Choose',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom vs Off-the-Shelf Software: What Growing Businesses Should Choose',
    description:
      'Discover the difference between custom and off-the-shelf software. Learn which solution is best for scalability, flexibility, and business growth in 2025. ',
    images: ['/images/blog-software-for-growing-business.webp'],
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
  return <CompSoftwareForGrowingBusiness />
};

export default page;
