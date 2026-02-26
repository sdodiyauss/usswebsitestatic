import React from "react";
import CompRoleOfElectronic from "./CompRoleOfElectronic";

export const metadata = {
  title: 'The Role of Electronic Health Records (EHR) in Modern Healthcare',
  description: 'Explore the role of Electronic Health Records (EHR) in modern healthcare, benefits, challenges, and the importance of custom EHR software development.',
  openGraph: {
    title: 'The Role of Electronic Health Records (EHR) in Modern Healthcare',
    description:
      'Explore the role of Electronic Health Records (EHR) in modern healthcare, benefits, challenges, and the importance of custom EHR software development.',
    url: 'https://www.universalstreamsolution.com/blog/role-of-electronic-health-records-ehr-in-modern-healthcare',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-role-of-electronic.webp',
        width: 1200,
        height: 630,
        alt: 'The Role of Electronic Health Records (EHR) in Modern Healthcare',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Role of Electronic Health Records (EHR) in Modern Healthcare',
    description:
      'Explore the role of Electronic Health Records (EHR) in modern healthcare, benefits, challenges, and the importance of custom EHR software development.',
    images: ['/images/blog-role-of-electronic.webp'],
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
  return <CompRoleOfElectronic />
};

export default page;
