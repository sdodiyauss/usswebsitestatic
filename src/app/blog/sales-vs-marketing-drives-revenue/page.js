import React from "react";
import CompSalesVSMarketing from "./CompSalesVSMarketing";

export const metadata = {
  title: 'Sales vs Marketing: What Drives Business Revenue?',
  description: 'Discover whether sales or marketing drives more revenue. Learn key differences, metrics, and how alignment boosts long-term business growth.',
  openGraph: {
    title: 'Sales vs Marketing: What Drives Business Revenue?',
    description:
      'Discover whether sales or marketing drives more revenue. Learn key differences, metrics, and how alignment boosts long-term business growth.',
    url: 'https://www.universalstreamsolution.com/blog/sales-vs-marketing-drives-revenue',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-salesVSmarketing.webp',
        width: 1200,
        height: 630,
        alt: 'Sales vs Marketing: What Drives Business Revenue?',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales vs Marketing: What Drives Business Revenue?',
    description:
      'Discover whether sales or marketing drives more revenue. Learn key differences, metrics, and how alignment boosts long-term business growth.',
    images: ['/images/blog-salesVSmarketing.webp'],
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
  return <CompSalesVSMarketing />
};

export default page;
