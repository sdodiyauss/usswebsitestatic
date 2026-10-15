import React from "react";
import CompHealthcareApplicationDevelopmentAI from "./CompHealthcareApplicationDevelopmentAI";

export const metadata = {
  title: 'Healthcare Application Development with AI Workflow Integration',
  description: 'Discover the healthcare application development process, including AI integration, custom mobile app development, EHR connectivity, and HIPAA security.',
  openGraph: {
    title: 'Healthcare Application Development with AI Workflow Integration',
    description:
      'Discover the healthcare application development process, including AI integration, custom mobile app development, EHR connectivity, and HIPAA security.',
    url: 'https://www.universalstreamsolution.com/blog/healthcare-application-development-with-ai-workflow',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-healthcare-application-development-with-ai.webp',
        width: 1200,
        height: 630,
        alt: 'Healthcare Application Development with AI Workflow Integration',  
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Application Development with AI Workflow Integration',
    description:
      'Discover the healthcare application development process, including AI integration, custom mobile app development, EHR connectivity, and HIPAA security.',
    images: ['/images/blog-healthcare-application-development-with-ai.webp'],
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
  return <CompHealthcareApplicationDevelopmentAI />
};

export default page;
