import React from "react";
import CompBuildHippaCompliant from "./CompBuildHippaCompliant";

export const metadata = {
  title: 'How to Build a HIPAA-Compliant Telehealth Platform for Healthcare Providers',
  description: 'Learn how to build HIPAA-compliant telehealth software with secure architecture, seamless EHR integration, AI-powered features and scalable healthcare solutions',
  openGraph: {
    title: 'How to Build a HIPAA-Compliant Telehealth Platform for Healthcare Providers',
    description:
      'Learn how to build HIPAA-compliant telehealth software with secure architecture, seamless EHR integration, AI-powered features and scalable healthcare solutions',
    url: 'https://www.universalstreamsolution.com/blog/build-hipaa-compliant-telehealth-platform',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-how-to-build-a-hipaa-compliant.webp',
        width: 1200,
        height: 630,
        alt: 'How to Build a HIPAA-Compliant Telehealth Platform for Healthcare Providers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build a HIPAA-Compliant Telehealth Platform for Healthcare Providers',
    description:
      'Learn how to build HIPAA-compliant telehealth software with secure architecture, seamless EHR integration, AI-powered features and scalable healthcare solutions',
    images: ['/images/blog-how-to-build-a-hipaa-compliant.webp'],
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
  return <CompBuildHippaCompliant />
};

export default page;
