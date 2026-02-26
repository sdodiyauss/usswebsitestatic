import React from "react";
import CompMobileAppServiceRealEstate from "./CompMobileAppServiceRealEstate";

export const metadata = {
  title: 'How Mobile App Services and Real Estate CRM Software Enhance Client Experience',
  description: 'Discover how mobile app services combined with real estate CRM software are transforming the client experience. Streamline property searches, virtual tours, notifications, and lead management for a seamless real estate journey.',
  openGraph: {
    title: 'How Mobile App Services and Real Estate CRM Software Enhance Client Experience',
    description:
      'Discover how mobile app services combined with real estate CRM software are transforming the client experience. Streamline property searches, virtual tours, notifications, and lead management for a seamless real estate journey.',
    url: 'https://www.universalstreamsolution.com/blog/mobile-app-services-real-estate-crm-client-experience',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-mobile-apps-transforming-real-estate.webp',
        width: 1200,
        height: 630,
        alt: 'How Mobile App Services and Real Estate CRM Software Enhance Client Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Mobile App Services and Real Estate CRM Software Enhance Client Experience',
    description:
      'Discover how mobile app services combined with real estate CRM software are transforming the client experience. Streamline property searches, virtual tours, notifications, and lead management for a seamless real estate journey.',
    images: ['/images/blog-mobile-apps-transforming-real-estate.webp'],
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
  return <CompMobileAppServiceRealEstate />
};

export default page;
