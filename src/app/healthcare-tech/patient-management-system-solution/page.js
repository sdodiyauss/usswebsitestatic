import React from "react";
import CompPatientManagentPortal from "./CompPatientManagentPortal";

export const metadata = {
  title: 'Patient Management System for Clinics & Hospitals | USS',
  description: 'Streamline patient registration, appointments, billing, telehealth, and communication with a secure Patient Management System designed for modern healthcare organizations.',
  openGraph: {
    title: 'Patient Management System for Clinics & Hospitals | USS',
    description: 'Streamline patient registration, appointments, billing, telehealth, and communication with a secure Patient Management System designed for modern healthcare organizations.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/patient-management-system-solution',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/patient-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Patient Management System for Clinics & Hospitals | USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Management System for Clinics & Hospitals | USS',
    description: 'Streamline patient registration, appointments, billing, telehealth, and communication with a secure Patient Management System designed for modern healthcare organizations.',
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
