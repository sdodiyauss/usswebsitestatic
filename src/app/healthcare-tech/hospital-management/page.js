import React from "react";
import CompHospitalManagement from "./CompHospitalManagement";

export const metadata = {
  title: 'Hospital Management Software Solutions',
  description: 'All‑in‑one hospital management software to streamline operations, manage patients, billing, inventory & ensure quality care delivery.',
  openGraph: {
    title: 'Hospital Management Software Solutions',
    description: 'All‑in‑one hospital management software to streamline operations, manage patients, billing, inventory & ensure quality care delivery.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/hospital-management',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/hospital-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Hospital Management Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Management Software Solutions',
    description: 'All‑in‑one hospital management software to streamline operations, manage patients, billing, inventory & ensure quality care delivery.',
    images: ['/images/hospital-bg.webp'],
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
  return <CompHospitalManagement />
};

export default page;
