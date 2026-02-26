import React from "react";
import CompEhrEmrDevelopment from "./CompEhrEmrDevelopment";

export const metadata = {
  title: 'EHR & EMR Development Services',
  description: 'Custom EHR/EMR solutions to digitize patient records, streamline workflows, and ensure secure, HIPAA‑compliant healthcare management.',
  openGraph: {
    title: 'EHR & EMR Development Services',
    description: 'Custom EHR/EMR solutions to digitize patient records, streamline workflows, and ensure secure, HIPAA‑compliant healthcare management.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/ehr-emr-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/ehr-emr-bg.webp',
        width: 1200,
        height: 630,
        alt: 'EHR & EMR Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EHR & EMR Development Services',
    description: 'Custom EHR/EMR solutions to digitize patient records, streamline workflows, and ensure secure, HIPAA‑compliant healthcare management.',
    images: ['/images/ehr-emr-bg.webp'],
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
  return <CompEhrEmrDevelopment />
};

export default page;
