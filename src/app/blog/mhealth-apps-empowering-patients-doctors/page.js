import React from "react";
import CompBlogMhealthApps from "./CompBlogMhealthApps";

export const metadata = {
  title: 'How mHealth Apps Empower Patients and Doctors | Digital Healthcare Solutions',
  description: 'Discover how mHealth apps are transforming healthcare by enabling patients to manage their health, helping doctors make informed decisions, and improving hospital efficiency. Learn more about digital prescription tools and patient experience solutions. ',
   openGraph: {
    title: 'How mHealth Apps Empower Patients and Doctors | Digital Healthcare Solutions',
    description:
      'Discover how mHealth apps are transforming healthcare by enabling patients to manage their health, helping doctors make informed decisions, and improving hospital efficiency. Learn more about digital prescription tools and patient experience solutions. ',
    url: 'https://www.universalstreamsolution.com/blog/mhealth-apps-empowering-patients-doctors',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-mhealth-apps-empower-img.webp',
        width: 1200,
        height: 630,
        alt: 'How mHealth Apps Empower Patients and Doctors | Digital Healthcare Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How mHealth Apps Empower Patients and Doctors | Digital Healthcare Solutions',
    description:
      'Discover how mHealth apps are transforming healthcare by enabling patients to manage their health, helping doctors make informed decisions, and improving hospital efficiency. Learn more about digital prescription tools and patient experience solutions. ',
    images: ['/images/blog-mhealth-apps-empower-img.webp'],
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
  return <CompBlogMhealthApps />
};

export default page;
