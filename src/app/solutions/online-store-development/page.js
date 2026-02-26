import React from "react";
import CompOnlineStoreDevelopment from "./CompOnlineStoreDevelopment";

export const metadata = {
  title: 'Online Store Development Services – USS',
  description: 'Launch a powerful eCommerce store with USS. We build secure, scalable, and user-friendly online stores that drive sales and enhance customer experience.',
   openGraph: {
    title: 'Online Store Development Services – USS',
    description:
      'Launch a powerful eCommerce store with USS. We build secure, scalable, and user-friendly online stores that drive sales and enhance customer experience.',
    url: 'https://www.universalstreamsolution.com/solutions/online-store-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Online Store Development Services – USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Store Development Services – USS',
    description:
      'Launch a powerful eCommerce store with USS. We build secure, scalable, and user-friendly online stores that drive sales and enhance customer experience.',
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
  return <CompOnlineStoreDevelopment />
};

export default page;
