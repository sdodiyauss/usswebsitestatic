import React from "react";
import CompRealEstateCrmSoft from "./CompRealEstateCrmSoft";

export const metadata = {
  title: 'From Listings to Leads: How Real Estate CRM Software Drives Sales',
  description: 'Discover how real estate CRM software helps agents manage leads, improve follow-ups, personalize client interactions, and close more property deals efficiently.',
  openGraph: {
    title: 'From Listings to Leads: How Real Estate CRM Software Drives Sales',
    description:
      'Discover how real estate CRM software helps agents manage leads, improve follow-ups, personalize client interactions, and close more property deals efficiently.',
    url: 'https://www.universalstreamsolution.com/blog/real-estate-crm-software-boosts-sales',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-real-estate-crm-soft.webp',
        width: 1200,
        height: 630,
        alt: 'From Listings to Leads: How Real Estate CRM Software Drives Sales',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Listings to Leads: How Real Estate CRM Software Drives Sales',
    description:
      'Discover how real estate CRM software helps agents manage leads, improve follow-ups, personalize client interactions, and close more property deals efficiently.',
    images: ['/images/blog-real-estate-crm-soft.webp'],
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
  return <CompRealEstateCrmSoft />
};

export default page;
