import React from "react";
import CompUIDevGuide from "./CompUIDevGuide";

export const metadata = {
  title: 'Complete UI Development Guide: Basics to Advanced',
  description: 'Learn UI development from HTML, CSS, and JS to design systems, responsive interfaces, and UI/UX best practices for intuitive, brand-consistent apps.',
  openGraph: {
    title: 'Complete UI Development Guide: Basics to Advanced',
    description:
      'Learn UI development from HTML, CSS, and JS to design systems, responsive interfaces, and UI/UX best practices for intuitive, brand-consistent apps.',
    url: 'https://www.universalstreamsolution.com/blog/ui-development-guide-basics-advanced',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ui-dev-guide.webp',
        width: 1200,
        height: 630,
        alt: 'Complete UI Development Guide: Basics to Advanced',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete UI Development Guide: Basics to Advanced',
    description:
      'Learn UI development from HTML, CSS, and JS to design systems, responsive interfaces, and UI/UX best practices for intuitive, brand-consistent apps.',
    images: ['/images/blog-ui-dev-guide.webp'],
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
  return <CompUIDevGuide />
};

export default page;
