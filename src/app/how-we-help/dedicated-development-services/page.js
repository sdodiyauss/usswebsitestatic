import React from "react";
import CompDedicatedDevelopmentServices from "./CompDedicatedDevelopmentServices";

export const metadata = {
  title: 'Hire Dedicated Developers | Scalable Dev Team Solutions',
  description: 'Get skilled dedicated developers for your project. Flexible team models, full-time support, and scalable solutions tailored to your business needs.',
  openGraph: {
    title: 'Hire Dedicated Developers | Scalable Dev Team Solutions',
    description: 'Get skilled dedicated developers for your project. Flexible team models, full-time support, and scalable solutions tailored to your business needs.',
    url: 'https://www.universalstreamsolution.com/how-we-help/dedicated-development-services',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Hire Dedicated Developers | Scalable Dev Team Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Dedicated Developers | Scalable Dev Team Solutions',
    description: 'Get skilled dedicated developers for your project. Flexible team models, full-time support, and scalable solutions tailored to your business needs.',
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
  return <CompDedicatedDevelopmentServices />
};

export default page;
