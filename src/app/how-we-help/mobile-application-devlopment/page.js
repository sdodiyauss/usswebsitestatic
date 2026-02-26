import React from "react";
import CompMobileApplicationDevelopment from "./CompMobileApplicationDevelopment";

export const metadata = {
  title: 'Mobile Application Development Services | USS',
  description: 'Get custom mobile application development with native and cross-platform solutions. USS builds secure, scalable apps tailored to your business goals.',
  openGraph: {
    title: 'Mobile Application Development Services | USS',
    description: 'Get custom mobile application development with native and cross-platform solutions. USS builds secure, scalable apps tailored to your business goals.',
    url: 'https://www.universalstreamsolution.com/how-we-help/mobile-application-devlopment',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile Application Development Services | USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Application Development Services | USS',
    description: 'Get custom mobile application development with native and cross-platform solutions. USS builds secure, scalable apps tailored to your business goals.',
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
  return <CompMobileApplicationDevelopment />
};

export default page;
