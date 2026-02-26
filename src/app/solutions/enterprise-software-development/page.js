import React from "react";
import CompEnterpriseSoftwareDevelopment from "./CompEnterpriseSoftwareDevelopment";

export const metadata = {
  title: 'Enterprise Software Development Solutions',
  description: 'Custom enterprise software to streamline operations, boost productivity, and drive growth with secure, scalable technology solutions.',
   openGraph: {
    title: 'Enterprise Software Development Solutions',
    description:
      'Custom enterprise software to streamline operations, boost productivity, and drive growth with secure, scalable technology solutions.',
    url: 'https://www.universalstreamsolution.com/solutions/enterprise-software-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Enterprise Software Development Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Software Development Solutions',
    description:
      'Custom enterprise software to streamline operations, boost productivity, and drive growth with secure, scalable technology solutions.',
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
  return <CompEnterpriseSoftwareDevelopment />
};

export default page;
