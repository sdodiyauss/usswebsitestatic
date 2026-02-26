import React from "react";
import CompTraveIIndustry from "./CompTraveIIndustry";

export const metadata = {
  title: 'How IT Solutions Are Transforming the Travel Industry for Seamless Experiences.',
  description: 'IT solutions are transforming the travel industry, enhancing efficiency, personalization, and the overall customer travel experience.',
  openGraph: {
    title: 'How IT Solutions Are Transforming the Travel Industry for Seamless Experiences.',
    description:
      'IT solutions are transforming the travel industry, enhancing efficiency, personalization, and the overall customer travel experience.',
    url: 'https://www.universalstreamsolution.com/blog/it-solutions-revolutionizing-travel-industry',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-travel-industry.webp',
        width: 1200,
        height: 630,
        alt: 'How IT Solutions Are Transforming the Travel Industry for Seamless Experiences.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How IT Solutions Are Transforming the Travel Industry for Seamless Experiences.',
    description:
      'IT solutions are transforming the travel industry, enhancing efficiency, personalization, and the overall customer travel experience.',
    images: ['/images/blog-travel-industry.webp'],
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
  return <CompTraveIIndustry />
};

export default page;
