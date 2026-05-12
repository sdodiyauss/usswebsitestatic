import React from "react";
import CompFintechSoftwareConsultation from "./CompFintechSoftwareConsultation";

export const metadata = {
  title: 'How FinTech Is Disrupting Traditional Banking',
  description: 'Discover how FinTech is transforming traditional banking through AI, automation, blockchain, and digital banking innovation. Explore the future of finance and fintech software consultation solutions.',
  openGraph: {
    title: 'How FinTech Is Disrupting Traditional Banking',
    description:
      'Discover how FinTech is transforming traditional banking through AI, automation, blockchain, and digital banking innovation. Explore the future of finance and fintech software consultation solutions.',
    url: 'https://www.universalstreamsolution.com/blog/how-fintech-is-disrupting-traditional-banking-fintech-software-consultation',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-fintech-software-consultation.webp',
        width: 1200,
        height: 630,
        alt: 'How FinTech Is Disrupting Traditional Banking',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How FinTech Is Disrupting Traditional Banking',
    description:
      'Discover how FinTech is transforming traditional banking through AI, automation, blockchain, and digital banking innovation. Explore the future of finance and fintech software consultation solutions.',
    images: ['/images/blog-fintech-software-consultation.webp'],
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
  return <CompFintechSoftwareConsultation />
};

export default page;
