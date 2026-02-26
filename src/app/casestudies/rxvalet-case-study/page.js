import React from "react";
import CompRxvaletCaseStudy from "./CompRxvaletCaseStudy";

export const metadata = {
  title: 'Rx Valet: Prescription Savings & Home Delivery | Case Study|',
  description: 'Rx Valet offers multiple ways to save up to 80% on prescriptions. Choose home delivery with FREE standard shipping, local retail pickup, or Prescription Assistance Programs.',
  openGraph: {
    title: 'Rx Valet: Prescription Savings & Home Delivery | Case Study|',
    description:
      'Rx Valet offers multiple ways to save up to 80% on prescriptions. Choose home delivery with FREE standard shipping, local retail pickup, or Prescription Assistance Programs.',
    url: 'https://www.universalstreamsolution.com/casestudies/rxvalet-case-study',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/casestudies-project1.webp',
        width: 1200,
        height: 630,
        alt: 'Rx Valet: Prescription Savings & Home Delivery | Case Study|',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rx Valet: Prescription Savings & Home Delivery | Case Study|',
    description:
      'Rx Valet offers multiple ways to save up to 80% on prescriptions. Choose home delivery with FREE standard shipping, local retail pickup, or Prescription Assistance Programs.',
    images: ['/images/casestudies-project1.webp'],
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
  return <CompRxvaletCaseStudy />
};

export default page;
