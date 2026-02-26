import React from "react";
import CompPbCaseStudy from "./CompPbCaseStudy";

export const metadata = {
  title: 'Prescription Bliss: Affordable Brand-Name Medications | Case Study',
  description: 'Struggling with high prescription costs? Prescription Bliss helps you get brand-name medications affordably. We handle applications for numerous medications, ensuring high approval rates.',
   openGraph: {
    title: 'Prescription Bliss: Affordable Brand-Name Medications | Case Study',
    description:
      'Struggling with high prescription costs? Prescription Bliss helps you get brand-name medications affordably. We handle applications for numerous medications, ensuring high approval rates.',
    url: 'https://www.universalstreamsolution.com/casestudies/pb-case-study',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/casestudies-project2.webp',
        width: 1200,
        height: 630,
        alt: 'Prescription Bliss: Affordable Brand-Name Medications | Case Study',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prescription Bliss: Affordable Brand-Name Medications | Case Study',
    description:
      'Struggling with high prescription costs? Prescription Bliss helps you get brand-name medications affordably. We handle applications for numerous medications, ensuring high approval rates.',
    images: ['/images/casestudies-project2.webp'],
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
  return <CompPbCaseStudy />
};

export default page;
