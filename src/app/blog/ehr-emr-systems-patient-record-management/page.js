import React from "react";
import CompERHERMSystemPatientRecord from "./CompERHERMSystemPatientRecord";

export const metadata = {
  title: 'EHR & EMR Systems for Smarter Patient Record Management',
  description: 'Discover how EHR and EMR systems improve patient record management using practical IT solutions that enhance care quality, security, and efficiency.',
  openGraph: {
    title: 'EHR & EMR Systems for Smarter Patient Record Management',
    description:
      'Discover how EHR and EMR systems improve patient record management using practical IT solutions that enhance care quality, security, and efficiency.',
    url: 'https://www.universalstreamsolution.com/blog/ehr-emr-systems-patient-record-management',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ehr-erm-patient-record.webp',
        width: 1200,
        height: 630,
        alt: 'EHR & EMR Systems for Smarter Patient Record Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EHR & EMR Systems for Smarter Patient Record Management',
    description:
      'Discover how EHR and EMR systems improve patient record management using practical IT solutions that enhance care quality, security, and efficiency.',
    images: ['/images/blog-ehr-erm-patient-record.webp'],
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
  return <CompERHERMSystemPatientRecord />
};

export default page;
