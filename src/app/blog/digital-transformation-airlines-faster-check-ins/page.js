import React from "react";
import CompDigitalTransformationAirlines from "./CompDigitalTransformationAirlines";

export const metadata = {
  title: 'Digital Transformation in Airlines: Faster Check-ins & Smarter Operations',
  description: 'Discover how digital transformation in airlines is revolutionizing travel. From faster check-ins and biometric boarding to AI-driven operations, learn how airlines are enhancing efficiency, safety, and improving passenger experience.',
  openGraph: {
    title: 'Digital Transformation in Airlines: Faster Check-ins & Smarter Operations',
    description:
      'Discover how digital transformation in airlines is revolutionizing travel. From faster check-ins and biometric boarding to AI-driven operations, learn how airlines are enhancing efficiency, safety, and improving passenger experience.',
    url: 'https://www.universalstreamsolution.com/blog/digital-transformation-airlines-faster-check-ins',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-digital-transformation-airlines.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Transformation in Airlines: Faster Check-ins & Smarter Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation in Airlines: Faster Check-ins & Smarter Operations',
    description:
      'Discover how digital transformation in airlines is revolutionizing travel. From faster check-ins and biometric boarding to AI-driven operations, learn how airlines are enhancing efficiency, safety, and improving passenger experience.',
    images: ['/images/blog-digital-transformation-airlines.webp'],
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
  return <CompDigitalTransformationAirlines />
};

export default page;
