import React from "react";
import CompSecurityRisk from "./CompSecurityRisk";

export const metadata = {
  title: 'Security Policy – Protecting Your Data & Privacy',
  description: 'Our Security Policy outlines how we safeguard your personal information with encryption, secure servers, and strict measures against unauthorized access.',
  openGraph: {
    title: 'Security Policy – Protecting Your Data & Privacy',
    description:
      'Our Security Policy outlines how we safeguard your personal information with encryption, secure servers, and strict measures against unauthorized access.',
    url: 'https://www.universalstreamsolution.com/security-risk',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Security Policy – Protecting Your Data & Privacy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Policy – Protecting Your Data & Privacy',
    description:
      'Our Security Policy outlines how we safeguard your personal information with encryption, secure servers, and strict measures against unauthorized access.',
    images: ['https://www.universalstreamsolution.com/images/usslogo.webp'],
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
  return <CompSecurityRisk />
};

export default page;
