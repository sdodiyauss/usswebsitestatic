import React from "react";
import CompGraphicsUiUxDesign from "./CompGraphicsUiUxDesign";

export const metadata = {
  title: 'Graphics & UI/UX Design Services – USS',
  description: 'USS crafts stunning visuals and intuitive interfaces. Elevate your brand with creative graphic design and seamless UI/UX experiences that engage users.',
  openGraph: {
    title: 'Graphics & UI/UX Design Services – USS',
    description: 'USS crafts stunning visuals and intuitive interfaces. Elevate your brand with creative graphic design and seamless UI/UX experiences that engage users.',
    url: 'https://www.universalstreamsolution.com/how-we-help/graphics-and-ui-ux-design',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Graphics & UI/UX Design Services – USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphics & UI/UX Design Services – USS',
    description: 'USS crafts stunning visuals and intuitive interfaces. Elevate your brand with creative graphic design and seamless UI/UX experiences that engage users.',
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
  return <CompGraphicsUiUxDesign />
};

export default page;
