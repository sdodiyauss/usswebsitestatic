import React from "react";
import CompCyberSecurityCloudManagement from "./CompCyberSecurityCloudManagement";

export const metadata = {
  title: 'Cybersecurity & Cloud Management Services | Secure IT',
  description: 'Protect your business with advanced cybersecurity and cloud management. Secure, monitor, and scale your IT infrastructure with expert support.',
   openGraph: {
    title: 'Cybersecurity & Cloud Management Services | Secure IT',
    description:
      'Protect your business with advanced cybersecurity and cloud management. Secure, monitor, and scale your IT infrastructure with expert support.',
    url: 'https://www.universalstreamsolution.com/solutions/cyber-security-and-cloud-management',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity & Cloud Management Services | Secure IT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity & Cloud Management Services | Secure IT',
    description:
      'Protect your business with advanced cybersecurity and cloud management. Secure, monitor, and scale your IT infrastructure with expert support.',
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
  return <CompCyberSecurityCloudManagement />
};

export default page;
