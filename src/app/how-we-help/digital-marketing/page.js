import React from "react";
import CompDigitalMarketing from "./CompDigitalMarketing";

export const metadata = {
  title: 'Digital Marketing Services to Grow Your Brand – USS',
  description: 'Boost your online presence with USS. From SEO to social media, we drive traffic, leads, and growth through smart digital marketing strategies.',
  openGraph: {
    title: 'Digital Marketing Services to Grow Your Brand – USS',
    description: 'Boost your online presence with USS. From SEO to social media, we drive traffic, leads, and growth through smart digital marketing strategies.',
    url: 'https://www.universalstreamsolution.com/how-we-help/digital-marketing',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services to Grow Your Brand – USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services to Grow Your Brand – USS',
    description: 'Boost your online presence with USS. From SEO to social media, we drive traffic, leads, and growth through smart digital marketing strategies.',
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
  return <CompDigitalMarketing />
};

export default page;
