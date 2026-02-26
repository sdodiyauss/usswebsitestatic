import React from "react";
import CompOtherIndustryExpertise from "./CompOtherIndustryExpertise";

export const metadata = {
  title: 'Enterprise & Industry Software Development Services',
  description: 'Custom software for enterprises & industries—healthcare, e‑commerce, finance, manufacturing & more. Secure, scalable & tailored to your business.',
   openGraph: {
    title: 'Enterprise & Industry Software Development Services',
    description:
      'Custom software for enterprises & industries—healthcare, e‑commerce, finance, manufacturing & more. Secure, scalable & tailored to your business.',
    url: 'https://www.universalstreamsolution.com/solutions/other-industry-expertise',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Enterprise & Industry Software Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise & Industry Software Development Services',
    description:
      'Custom software for enterprises & industries—healthcare, e‑commerce, finance, manufacturing & more. Secure, scalable & tailored to your business.',
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
  return <CompOtherIndustryExpertise />
};

export default page;
