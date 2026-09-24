import React from "react";
import CompWhyVisualDesignMatters from "./CompWhyVisualDesignMatters";

export const metadata = {
  title: 'Why Visual Design Matters in Website Development',
  description: 'Learn why visual design matters in website development and how it improves user experience, brand trust, usability, conversions, and website performance.',
  openGraph: {
    title: 'Why Visual Design Matters in Website Development',
    description:
      'Learn why visual design matters in website development and how it improves user experience, brand trust, usability, conversions, and website performance.',
    url: 'https://www.universalstreamsolution.com/blog/why-visual-design-matters-in-website-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-why-visual-design-matters.webp',
        width: 1200,
        height: 630,
        alt: 'Why Visual Design Matters in Website Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Visual Design Matters in Website Development',
    description:
      'Learn why visual design matters in website development and how it improves user experience, brand trust, usability, conversions, and website performance.',
    images: ['/images/blog-why-visual-design-matters.webp'],
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
  return <CompWhyVisualDesignMatters />
};

export default page;
