import React from "react";
import CompMinimalistvsMaximalistBranding from "./CompMinimalistvsMaximalistBranding";

export const metadata = {
  title: 'Minimalist vs Maximalist Branding: Which Wins in 2025? ',
  description: 'Explore minimalist vs maximalist branding in 2025. Learn how user intent, trust, and experience shape which branding style works best today. ',
  openGraph: {
    title: 'Minimalist vs Maximalist Branding: Which Wins in 2025? ',
    description:
      'Explore minimalist vs maximalist branding in 2025. Learn how user intent, trust, and experience shape which branding style works best today. ',
    url: 'https://www.universalstreamsolution.com/blog/minimalist-vs-maximalist-branding',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-minimalist-vs-maximalist-branding.webp',
        width: 1200,
        height: 630,
        alt: 'Minimalist vs Maximalist Branding: Which Wins in 2025? ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minimalist vs Maximalist Branding: Which Wins in 2025? ',
    description:
      'Explore minimalist vs maximalist branding in 2025. Learn how user intent, trust, and experience shape which branding style works best today. ',
    images: ['/images/blog-minimalist-vs-maximalist-branding.webp'],
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
  return <CompMinimalistvsMaximalistBranding />
};

export default page;
