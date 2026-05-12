import React from "react";
import CompFutureofPatientExperience from "./CompFutureofPatientExperience";

export const metadata = {
  title: 'From Patient Portals to Digital Front Doors | Future of Patient Experience',
  description: 'Discover how digital front doors are transforming patient experience through healthcare digital transformation, telehealth, AI, and patient management systems for seamless healthcare delivery.',
  openGraph: {
    title: 'From Patient Portals to Digital Front Doors | Future of Patient Experience',
    description:
      'Discover how digital front doors are transforming patient experience through healthcare digital transformation, telehealth, AI, and patient management systems for seamless healthcare delivery.',
    url: 'https://www.universalstreamsolution.com/blog/from-patient-portals-to-digital-front-door-future-of-patient-experience',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-future-of-patient-experience.webp',
        width: 1200,
        height: 630,
        alt: 'From Patient Portals to Digital Front Doors | Future of Patient Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Patient Portals to Digital Front Doors | Future of Patient Experience',
    description:
      'Discover how digital front doors are transforming patient experience through healthcare digital transformation, telehealth, AI, and patient management systems for seamless healthcare delivery.',
    images: ['/images/blog-future-of-patient-experience.webp'],
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
  return <CompFutureofPatientExperience />
};

export default page;
