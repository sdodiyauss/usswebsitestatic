import React from "react";
import CompEHRForModernHealthcare from "./CompEHRForModernHealthcare";

export const metadata = {
  title: 'EHR Interoperability Challenges & Solutions for Modern Healthcare',
  description: 'Discover why hospitals struggle with EHR interoperability and how APIs, cloud computing, and AI-driven healthcare tech solutions are transforming data exchange and patient care. Book a demo call for healthcare tech solutions to explore tailored solutions. ',
  openGraph: {
    title: 'EHR Interoperability Challenges & Solutions for Modern Healthcare',
    description:
      'Discover why hospitals struggle with EHR interoperability and how APIs, cloud computing, and AI-driven healthcare tech solutions are transforming data exchange and patient care. Book a demo call for healthcare tech solutions to explore tailored solutions. ',
    url: 'https://www.universalstreamsolution.com/blog/ehr-interoperability-challenges-solutions-healthcare',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ehr-interoperability.webp',
        width: 1200,
        height: 630,
        alt: 'EHR Interoperability Challenges & Solutions for Modern Healthcare',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EHR Interoperability Challenges & Solutions for Modern Healthcare',
    description:
      'Discover why hospitals struggle with EHR interoperability and how APIs, cloud computing, and AI-driven healthcare tech solutions are transforming data exchange and patient care. Book a demo call for healthcare tech solutions to explore tailored solutions. ',
    images: ['/images/blog-ehr-interoperability.webp'],
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
  return <CompEHRForModernHealthcare />
};

export default page;
