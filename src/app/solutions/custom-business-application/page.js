import React from "react";
import CompCustomBusinessApplication from "./CompCustomBusinessApplication";

export const metadata = {
  title: 'Security Policy – Protecting Your Data & Privacy',
  description: 'Build custom business apps designed for your workflow. Scalable, efficient, and built to match your exact needs—boost productivity and performance',
   openGraph: {
    title: 'Security Policy – Protecting Your Data & Privacy',
    description:
      'Build custom business apps designed for your workflow. Scalable, efficient, and built to match your exact needs—boost productivity and performance',
    url: 'https://www.universalstreamsolution.com/solutions/custom-business-application',
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
      'Build custom business apps designed for your workflow. Scalable, efficient, and built to match your exact needs—boost productivity and performance',
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
  return <CompCustomBusinessApplication />
};

export default page;
