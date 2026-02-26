import React from "react";
import CompCustomSoftwareDevelopment from "./CompCustomSoftwareDevelopment";

export const metadata = {
  title: 'Custom Software Development Services – USS',
  description: 'Get tailor-made software solutions with USS. We develop scalable, secure, and efficient systems that fit your unique business goals and workflows.',
   openGraph: {
    title: 'Custom Software Development Services – USS',
    description:
      'Get tailor-made software solutions with USS. We develop scalable, secure, and efficient systems that fit your unique business goals and workflows.',
    url: 'https://www.universalstreamsolution.com/how-we-help/custom-software-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Software Development Services – USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services – USS',
    description:
      'Get tailor-made software solutions with USS. We develop scalable, secure, and efficient systems that fit your unique business goals and workflows.',
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
  return <CompCustomSoftwareDevelopment />
};

export default page;
