import React from "react";
import CompDigitalBankingPropertyfinancing from "./CompDigitalBankingPropertyfinancing";

export const metadata = {
  title: 'How Digital Banking Is Revolutionizing Property Financing in 2025',
  description: 'Discover how digital banking is transforming property financing—faster approvals, paperless processes, personalized loans, and secure transactions for buyers, investors, and developers.  ',
  openGraph: {
    title: 'How Digital Banking Is Revolutionizing Property Financing in 2025',
    description:
      'Discover how digital banking is transforming property financing—faster approvals, paperless processes, personalized loans, and secure transactions for buyers, investors, and developers. ',
    url: 'https://www.universalstreamsolution.com/blog/digital-banking-property-financing',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-digital-banking-property-financing.webp',
        width: 1200,
        height: 630,
        alt: 'How Digital Banking Is Revolutionizing Property Financing in 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Digital Banking Is Revolutionizing Property Financing in 2025',
    description:
      'Discover how digital banking is transforming property financing—faster approvals, paperless processes, personalized loans, and secure transactions for buyers, investors, and developers. ',
    images: ['/images/blog-digital-banking-property-financing.webp'],
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
  return <CompDigitalBankingPropertyfinancing />
};

export default page;
