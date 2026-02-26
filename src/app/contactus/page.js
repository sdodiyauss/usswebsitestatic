import React from "react";
import CompContactus from "./CompContactus";

export const metadata = {
  title: 'Contact USS – Get in Touch Today',
  description: 'Have questions or need support? Contact USS for quick help, expert advice, or custom solutions tailored to your business needs.',
   openGraph: {
    title: 'Contact USS – Get in Touch Today',
    description:
      'Have questions or need support? Contact USS for quick help, expert advice, or custom solutions tailored to your business needs.',
    url: 'https://www.universalstreamsolution.com/contactus',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/image-contact-form.webp',
        width: 1200,
        height: 630,
        alt: 'Contact USS – Get in Touch Today',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact USS – Get in Touch Today',
    description:
      'Have questions or need support? Contact USS for quick help, expert advice, or custom solutions tailored to your business needs.',
    images: ['/images/image-contact-form.webp'],
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
  return <CompContactus />
};

export default page;
