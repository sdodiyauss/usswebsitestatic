import React from "react";
import CompHealthcare from "./CompHealthcare";

export const metadata = {
  title: 'Custom Healthcare Software & IT Services Company | USS',
  description: 'USS offers custom healthcare IT solutions including patient portals, hospital systems, telehealth platforms, and EHR integrations for clinics and hospitals.',
   openGraph: {
    title: 'Custom Healthcare Software & IT Services Company | USS',
    description:
      'USS offers custom healthcare IT solutions including patient portals, hospital systems, telehealth platforms, and EHR integrations for clinics and hospitals.',
    url: 'https://www.universalstreamsolution.com/healthcare',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/trust-uss-vector.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Healthcare Software & IT Services Company | USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Healthcare Software & IT Services Company | USS',
    description:
      'USS offers custom healthcare IT solutions including patient portals, hospital systems, telehealth platforms, and EHR integrations for clinics and hospitals.',
    images: ['/images/trust-uss-vector.webp'],
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
  return <CompHealthcare />
};

export default page;
