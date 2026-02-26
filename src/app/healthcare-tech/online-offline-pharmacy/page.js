import React from "react";
import CompOnlineOfflinePharmacy from "./CompOnlineOfflinePharmacy";

export const metadata = {
  title: 'Online & Offline Pharmacy Software Solutions',
  description: 'Manage your pharmacy online & offline with secure software—inventory, billing, prescriptions & compliance, all in one platform.',
  openGraph: {
    title: 'Online & Offline Pharmacy Software Solutions',
    description: 'Manage your pharmacy online & offline with secure software—inventory, billing, prescriptions & compliance, all in one platform.',
    url: 'https://www.universalstreamsolution.com/healthcare-tech/online-offline-pharmacy',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/pharmacy-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Online & Offline Pharmacy Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online & Offline Pharmacy Software Solutions',
    description: 'Manage your pharmacy online & offline with secure software—inventory, billing, prescriptions & compliance, all in one platform.',
    images: ['/images/pharmacy-bg.webp'],
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
  return <CompOnlineOfflinePharmacy />
};

export default page;
