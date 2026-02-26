import React from "react";
import CompPrescriptionAssistancePortal from "./CompPrescriptionAssistancePortal";

export const metadata = {
  title: 'Prescription Assistance & Savings Portal',
  description: 'Get affordable medications through our prescription assistance portal. Access discounts, support programs & save on your prescriptions today.',
  openGraph: {
    title: 'Prescription Assistance & Savings Portal',
    description: 'Get affordable medications through our prescription assistance portal. Access discounts, support programs & save on your prescriptions today.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/prescription-assistance-portal',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/pap-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Prescription Assistance & Savings Portal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prescription Assistance & Savings Portal',
    description: 'Get affordable medications through our prescription assistance portal. Access discounts, support programs & save on your prescriptions today.',
    images: ['/images/pap-bg.webp'],
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
  return <CompPrescriptionAssistancePortal />
};

export default page;
