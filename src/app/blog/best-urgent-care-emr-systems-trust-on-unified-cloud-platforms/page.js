import React from "react";
import CompBestUrgentCareEMRSystem from "./CompBestUrgentCareEMRSystem";

export const metadata = {
  title: 'Best Urgent Care EMR Systems Trust on Unified Cloud Platforms',
  description: 'How unified cloud platforms help urgent health care EMR systems improve patient workflows, interoperability, security, AI integration, and operational efficiency.',
  openGraph: {
    title: 'Best Urgent Care EMR Systems Trust on Unified Cloud Platforms',
    description:
      'How unified cloud platforms help urgent health care EMR systems improve patient workflows, interoperability, security, AI integration, and operational efficiency.',
    url: 'https://www.universalstreamsolution.com/blog/best-urgent-care-emr-systems-trust-on-unified-cloud-platforms',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-best-urgent-care-emr-systems.webp',
        width: 1200,
        height: 630,
        alt: 'Best Urgent Care EMR Systems Trust on Unified Cloud Platforms',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Urgent Care EMR Systems Trust on Unified Cloud Platforms',
    description:
      'How unified cloud platforms help urgent health care EMR systems improve patient workflows, interoperability, security, AI integration, and operational efficiency.',
    images: ['/images/blog-best-urgent-care-emr-systems.webp'],
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
  return <CompBestUrgentCareEMRSystem />
};

export default page;
