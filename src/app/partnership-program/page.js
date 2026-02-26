import React from "react";
import CompPartnershipProgram from "./CompPartnershipProgram";

export const metadata = {
  title: 'Partnership – Collaborate & Grow Together',
  description: 'Explore partnership opportunities with us to innovate, expand reach, and achieve mutual growth through collaboration, trust, and shared expertise.',
   openGraph: {
    title: 'Partnership – Collaborate & Grow Together',
    description:
      'Explore partnership opportunities with us to innovate, expand reach, and achieve mutual growth through collaboration, trust, and shared expertise.',
    url: 'https://www.universalstreamsolution.com/partership-program',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/partnership-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Partnership – Collaborate & Grow Together',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnership – Collaborate & Grow Together',
    description:
      'Explore partnership opportunities with us to innovate, expand reach, and achieve mutual growth through collaboration, trust, and shared expertise.',
    images: ['/images/partnership-bg.webp'],
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
  return <CompPartnershipProgram />
};

export default page;
