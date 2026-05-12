import React from "react";
import CompProductDesignUXRevenue from "./CompProductDesignUXRevenue";

export const metadata = {
  title: 'From Idea to Interface: Product Design for UX & Revenue',
  description: 'Learn how product design transforms ideas into user-friendly interfaces that enhance UX, boost engagement, and drive business revenue growth.',
  openGraph: {
    title: 'From Idea to Interface: Product Design for UX & Revenue',
    description:
      'Learn how product design transforms ideas into user-friendly interfaces that enhance UX, boost engagement, and drive business revenue growth.',
    url: 'https://www.universalstreamsolution.com/blog/product-design-user-experience-revenue',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-product-design-ux-revenue.webp',
        width: 1200,
        height: 630,
        alt: 'From Idea to Interface: Product Design for UX & Revenue',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Idea to Interface: Product Design for UX & Revenue',
    description:
      'Learn how product design transforms ideas into user-friendly interfaces that enhance UX, boost engagement, and drive business revenue growth.',
    images: ['/images/blog-product-design-ux-revenue.webp'],
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
  return <CompProductDesignUXRevenue />
};

export default page;
