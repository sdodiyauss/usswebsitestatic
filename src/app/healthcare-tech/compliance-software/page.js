import React from "react";
import CompComplianceSoftware from "./CompComplianceSoftware";

export const metadata = {
  title: 'Compliance Management Software Solutions',
  description: 'Stay audit‑ready with compliance software that tracks regulations, manages risks, automates tasks & ensures industry standards.',
  openGraph: {
    title: 'Compliance Management Software Solutions',
    description: 'Stay audit‑ready with compliance software that tracks regulations, manages risks, automates tasks & ensures industry standards.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/compliance-software',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/compliance-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Compliance Management Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compliance Management Software Solutions',
    description: 'Stay audit‑ready with compliance software that tracks regulations, manages risks, automates tasks & ensures industry standards.',
    images: ['/images/compliance-bg.webp'],
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
  return <CompComplianceSoftware />
};

export default page;
