import React from "react";
import CompUIDesignToFrontendDevlopment from "./CompUIDesignToFrontendDevlopment";

export const metadata = {
  title: 'From Figma to Frontend: Where UI Designs Break in Real Development',
  description: 'Discover why UI designs often break during frontend development and learn how modern UI/UX development solutions improve responsiveness, performance, scalability, and user experience.',
  openGraph: {
    title: 'From Figma to Frontend: Where UI Designs Break in Real Development',
    description:
      'Discover why UI designs often break during frontend development and learn how modern UI/UX development solutions improve responsiveness, performance, scalability, and user experience.',
    url: 'https://www.universalstreamsolution.com/blog/ui-design-to-frontend-development-challenges',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ui-design-to-frontend-dev.webp',
        width: 1200,
        height: 630,
        alt: 'From Figma to Frontend: Where UI Designs Break in Real Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Figma to Frontend: Where UI Designs Break in Real Development',
    description:
      'Discover why UI designs often break during frontend development and learn how modern UI/UX development solutions improve responsiveness, performance, scalability, and user experience.',
    images: ['/images/blog-ui-design-to-frontend-dev.webp'],
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
  return <CompUIDesignToFrontendDevlopment />
};

export default page;
