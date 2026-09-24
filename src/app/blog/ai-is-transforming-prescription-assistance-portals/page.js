import React from "react";
import CompAIIsTransformingPap from "./CompAIIsTransformingPap";

export const metadata = {
  title: 'How AI Is Transforming Prescription Assistance Portals in Healthcare',
  description: 'AI is transforming prescription assistance portals with document processing, insurance checks, live chat support, faster patient responses and less manual work.',
  openGraph: {
    title: 'How AI Is Transforming Prescription Assistance Portals in Healthcare',
    description:
      'AI is transforming prescription assistance portals with document processing, insurance checks, live chat support, faster patient responses and less manual work.',
    url: 'https://www.universalstreamsolution.com/blog/ai-is-transforming-prescription-assistance-portals',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ai-is-transforming-pap-healthcare.webp',
        width: 1200,
        height: 630,
        alt: 'How AI Is Transforming Prescription Assistance Portals in Healthcare',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AI Is Transforming Prescription Assistance Portals in Healthcare',
    description:
      'AI is transforming prescription assistance portals with document processing, insurance checks, live chat support, faster patient responses and less manual work.',
    images: ['/images/blog-ai-is-transforming-pap-healthcare.webp'],
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
  return <CompAIIsTransformingPap />
};

export default page;
