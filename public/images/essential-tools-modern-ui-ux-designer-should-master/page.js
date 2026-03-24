import React from "react";
import CompModenUIUXDesignerMaster from "./CompModenUIUXDesignerMaster";

export const metadata = {
  title: 'Essential Tools Every Modern UI/UX Designer Should Master',
  description: 'Discover the essential tools every modern UI/UX designer should master, including Figma, Adobe XD, Sketch, Axure, and more to create seamless digital experiences.',
  openGraph: {
    title: 'Essential Tools Every Modern UI/UX Designer Should Master',
    description:
      'Discover the essential tools every modern UI/UX designer should master, including Figma, Adobe XD, Sketch, Axure, and more to create seamless digital experiences.',
    url: 'https://www.universalstreamsolution.com/blog/essential-tools-modern-ui-ux-designer-should-master',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-modern-ui-ux-designer-master.webp',
        width: 1200,
        height: 630,
        alt: 'Essential Tools Every Modern UI/UX Designer Should Master',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essential Tools Every Modern UI/UX Designer Should Master',
    description:
      'Discover the essential tools every modern UI/UX designer should master, including Figma, Adobe XD, Sketch, Axure, and more to create seamless digital experiences.',
    images: ['/images/blog-modern-ui-ux-designer-master.webp'],
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
  return <CompModenUIUXDesignerMaster />
};

export default page;
