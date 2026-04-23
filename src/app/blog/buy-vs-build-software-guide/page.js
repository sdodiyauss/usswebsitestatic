import React from "react";
import CompBuyVSBuildSoftwareGuide from "./CompBuyVSBuildSoftwareGuide";

export const metadata = {
  title: 'Buy vs Build Software: Cost, Benefits & Best Strategy for Businesses',
  description: 'Explore the pros and cons of buying vs building software, cost comparison, and scalability insights. Learn what works best and schedule a free consultation now.',
  openGraph: {
    title: 'Buy vs Build Software: Cost, Benefits & Best Strategy for Businesses',
    description:
      'Explore the pros and cons of buying vs building software, cost comparison, and scalability insights. Learn what works best and schedule a free consultation now.',
    url: 'https://www.universalstreamsolution.com/blog/buy-vs-build-software-guide',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-buy-vs-build-software.webp',
        width: 1200,
        height: 630,
        alt: 'Buy vs Build Software: Cost, Benefits & Best Strategy for Businesses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy vs Build Software: Cost, Benefits & Best Strategy for Businesses',
    description:
      'Explore the pros and cons of buying vs building software, cost comparison, and scalability insights. Learn what works best and schedule a free consultation now.',
    images: ['/images/blog-buy-vs-build-software.webp'],
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
  return <CompBuyVSBuildSoftwareGuide />
};

export default page;
