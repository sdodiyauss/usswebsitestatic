import React from "react";
import CompTestingQualityControl from "./CompTestingQualityControl";

export const metadata = {
  title: 'Software Testing & Quality Control Services – USS',
  description: 'Ensure flawless performance with USS. We provide expert testing and quality control to deliver reliable, secure, and bug-free software every time.',
  openGraph: {
    title: 'Software Testing & Quality Control Services – USS',
    description: 'Ensure flawless performance with USS. We provide expert testing and quality control to deliver reliable, secure, and bug-free software every time.',
    url: 'https://www.universalstreamsolution.com/how-we-help/testing-and-quality-control',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Software Testing & Quality Control Services – USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Testing & Quality Control Services – USS',
    description: 'Ensure flawless performance with USS. We provide expert testing and quality control to deliver reliable, secure, and bug-free software every time.',
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
  return <CompTestingQualityControl />
};

export default page;
