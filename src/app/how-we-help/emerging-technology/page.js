import React from "react";
import CompEmergingTechnology from "./CompEmergingTechnology";

export const metadata = {
  title: 'Emerging Technology Solutions – Future-Ready by USS',
  description: 'Unlock innovation with USS. Explore AI, Blockchain, IoT, AR/VR, and more—cutting-edge tech tailored to modern business challenges.',
  openGraph: {
    title: 'Emerging Technology Solutions – Future-Ready by USS',
    description: 'Unlock innovation with USS. Explore AI, Blockchain, IoT, AR/VR, and more—cutting-edge tech tailored to modern business challenges.',
    url: 'https://www.universalstreamsolution.com/how-we-help/emerging-technology',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Emerging Technology Solutions – Future-Ready by USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerging Technology Solutions – Future-Ready by USS',
    description: 'Unlock innovation with USS. Explore AI, Blockchain, IoT, AR/VR, and more—cutting-edge tech tailored to modern business challenges.',
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
  return <CompEmergingTechnology />
};

export default page;
