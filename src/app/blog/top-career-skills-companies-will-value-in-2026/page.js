import React from "react";
import CompCareerSkillCompanies from "./CompCareerSkillCompanies";

export const metadata = {
  title: 'Top Career Skills Companies Will Value in 2026 | Future-Proof Your Career.',
  description: 'Discover the top career skills companies will value in 2026, including AI literacy, critical thinking, communication, leadership, and data skills.',
  openGraph: {
    title: 'Top Career Skills Companies Will Value in 2026 | Future-Proof Your Career.',
    description:
      'Discover the top career skills companies will value in 2026, including AI literacy, critical thinking, communication, leadership, and data skills.',
    url: 'https://www.universalstreamsolution.com/blog/top-career-skills-companies-will-value-in-2026',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-top-career-skills-companies.webp',
        width: 1200,
        height: 630,
        alt: 'Top Career Skills Companies Will Value in 2026 | Future-Proof Your Career.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Career Skills Companies Will Value in 2026 | Future-Proof Your Career.',
    description:
      'Discover the top career skills companies will value in 2026, including AI literacy, critical thinking, communication, leadership, and data skills.',
    images: ['/images/blog-top-career-skills-companies.webp'],
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
  return <CompCareerSkillCompanies />
};

export default page;
