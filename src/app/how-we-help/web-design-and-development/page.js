import React from "react";
import CompWebDesignDevelopment from "./CompWebDesignDevelopment";

export const metadata = {
  title: 'Web Design & Development Services – USS',
  description: 'Build stunning, high-performance websites with USS. We design and develop user-friendly, responsive, and SEO-optimized sites that drive real results.',
  openGraph: {
    title: 'Web Design & Development Services – USS',
    description: 'Build stunning, high-performance websites with USS. We design and develop user-friendly, responsive, and SEO-optimized sites that drive real results.',
    url: 'https://www.universalstreamsolution.com/how-we-help/web-design-and-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: 'https://www.universalstreamsolution.com/images/usslogo.webp',
        width: 1200,
        height: 630,
        alt: 'Web Design & Development Services – USS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Development Services – USS',
    description: 'Build stunning, high-performance websites with USS. We design and develop user-friendly, responsive, and SEO-optimized sites that drive real results.',
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
  return <CompWebDesignDevelopment />
};

export default page;
