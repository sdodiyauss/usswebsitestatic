import React from "react";
import CompMedicalBilling from "./CompMedicalBilling";

export const metadata = {
  title: 'Medical Billing Services & Software Solutions',
  description: 'Streamline medical billing with secure, accurate, and compliant solutions. Reduce errors, speed reimbursements, and boost revenue.',
  openGraph: {
    title: 'Medical Billing Services & Software Solutions',
    description: 'Streamline medical billing with secure, accurate, and compliant solutions. Reduce errors, speed reimbursements, and boost revenue.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/medical-billing',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/medical-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Medical Billing Services & Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Billing Services & Software Solutions',
    description: 'Streamline medical billing with secure, accurate, and compliant solutions. Reduce errors, speed reimbursements, and boost revenue.',
    images: ['/images/medical-bg.webp'],
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
  return <CompMedicalBilling />
};

export default page;
