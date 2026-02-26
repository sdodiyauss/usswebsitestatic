import React from "react";
import CompPatientManagentPortal from "./CompPatientManagentPortal";

export const metadata = {
  title: 'Patient Management Software for Clinics & Hospitals | USS',
  description: 'USS offers patient management software for hospitals and clinics with features like appointment scheduling, EHR integration, billing, and secure data handling.',
  openGraph: {
    title: 'Patient Management Software for Clinics & Hospitals | USS',
    description: 'USS offers patient management software for hospitals and clinics with features like appointment scheduling, EHR integration, billing, and secure data handling.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/patient-management-portal',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/patient-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Patient Management Software for Clinics & Hospitals | USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Management Software for Clinics & Hospitals | USS',
    description: 'USS offers patient management software for hospitals and clinics with features like appointment scheduling, EHR integration, billing, and secure data handling.',
    images: ['/images/patient-banner.webp'],
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

const page = () => {
  return <CompPatientManagentPortal />
};

export default page;
