import React from "react";
import CompFutureOfPrescriptions from "./CompFutureOfPrescriptions";

export const metadata = {
  title: 'E-Prescriptions in Pharmacies: Benefits, Technology, and Future Trends.',
  description: 'E-prescriptions are transforming pharmacy operations by reducing medication errors, improving workflow efficiency, and enhancing patient safety. Discover how digital prescribing is shaping the future of pharmacies and healthcare technology.',
  openGraph: {
    title: 'E-Prescriptions in Pharmacies: Benefits, Technology, and Future Trends.',
    description:
      'E-prescriptions are transforming pharmacy operations by reducing medication errors, improving workflow efficiency, and enhancing patient safety. Discover how digital prescribing is shaping the future of pharmacies and healthcare technology.',
    url: 'https://www.universalstreamsolution.com/blog/future-of-e-prescriptions-in-pharmacies',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-future-are-changing-prescriptions.webp',
        width: 1200,
        height: 630,
        alt: 'E-Prescriptions in Pharmacies: Benefits, Technology, and Future Trends.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Prescriptions in Pharmacies: Benefits, Technology, and Future Trends.',
    description:
      'E-prescriptions are transforming pharmacy operations by reducing medication errors, improving workflow efficiency, and enhancing patient safety. Discover how digital prescribing is shaping the future of pharmacies and healthcare technology.',
    images: ['/images/blog-future-are-changing-prescriptions.webp'],
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
  return <CompFutureOfPrescriptions />
};

export default page;
