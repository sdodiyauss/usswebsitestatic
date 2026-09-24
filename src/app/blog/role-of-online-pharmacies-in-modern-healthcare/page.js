import React from "react";
import CompRoleOfOnlinePharmacy from "./CompRoleOfOnlinePharmacy";

export const metadata = {
  title: 'Role of Online Pharmacies in Modern Healthcare',
  description: 'Discover the role of online pharmacies in modern healthcare, including their benefits, key features, challenges, medication management, and future.',
  openGraph: {
    title: 'Role of Online Pharmacies in Modern Healthcare',
    description:
      'Discover the role of online pharmacies in modern healthcare, including their benefits, key features, challenges, medication management, and future.',
    url: 'https://www.universalstreamsolution.com/blog/top-career-skills-companies-will-value-in-2026',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-role-of-online-pharmacy.webp',
        width: 1200,
        height: 630,
        alt: 'Role of Online Pharmacies in Modern Healthcare',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Role of Online Pharmacies in Modern Healthcare',
    description:
      'Discover the role of online pharmacies in modern healthcare, including their benefits, key features, challenges, medication management, and future.',
    images: ['/images/blog-role-of-online-pharmacy.webp'],
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
  return <CompRoleOfOnlinePharmacy />
};

export default page;
