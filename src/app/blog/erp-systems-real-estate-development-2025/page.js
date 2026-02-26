import React from "react";
import CompERPSystemsStreamlineRealEstate from "./CompERPSystemsStreamlineRealEstate";

export const metadata = {
  title: 'How ERP Systems Streamline Real Estate Development Projects in 2025 ',
  description: 'Discover how ERP systems simplify real estate development—improving project management, cost control, team collaboration, and timely handovers. Learn why custom ERP solutions are essential for developers in 2025.',
  openGraph: {
    title: 'How ERP Systems Streamline Real Estate Development Projects in 2025 ',
    description:
      'Discover how ERP systems simplify real estate development—improving project management, cost control, team collaboration, and timely handovers. Learn why custom ERP solutions are essential for developers in 2025.',
    url: 'https://www.universalstreamsolution.com/blog/erp-systems-real-estate-development-2025',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-erp-systems-real-estate-development.webp',
        width: 1200,
        height: 630,
        alt: 'How ERP Systems Streamline Real Estate Development Projects in 2025 ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How ERP Systems Streamline Real Estate Development Projects in 2025 ',
    description:
      'Discover how ERP systems simplify real estate development—improving project management, cost control, team collaboration, and timely handovers. Learn why custom ERP solutions are essential for developers in 2025.',
    images: ['/images/blog-erp-systems-real-estate-development.webp'],
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
  return <CompERPSystemsStreamlineRealEstate />
};

export default page;
