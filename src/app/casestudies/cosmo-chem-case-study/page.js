import React from "react";
import CompCosmoChemCaseStudy from "./CompCosmoChemCaseStudy";

export const metadata = {
  title: 'Chemical Contract Manufacturing India | Talc Supplier | CosmoChem',
  description: 'CosmoChem provides chemical contract manufacturing and is Indias premier Talc supplier. We deliver cost-optimized, sustainable solutions across 10+ industries with 5+ years of expertise.',
  openGraph: {
    title: 'Chemical Contract Manufacturing India | Talc Supplier | CosmoChem',
    description:
      'CosmoChem provides chemical contract manufacturing and is Indias premier Talc supplier. We deliver cost-optimized, sustainable solutions across 10+ industries with 5+ years of expertise.',
    url: 'https://www.universalstreamsolution.com/casestudies/cosmo-chem-case-study',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/casestudies-project3.webp',
        width: 1200,
        height: 630,
        alt: 'Chemical Contract Manufacturing India | Talc Supplier | CosmoChem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chemical Contract Manufacturing India | Talc Supplier | CosmoChem',
    description:
      'CosmoChem provides chemical contract manufacturing and is Indias premier Talc supplier. We deliver cost-optimized, sustainable solutions across 10+ industries with 5+ years of expertise.',
    images: ['/images/casestudies-project3.webp'],
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
  return <CompCosmoChemCaseStudy />
};

export default page;
