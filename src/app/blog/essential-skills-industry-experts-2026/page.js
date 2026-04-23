import React from "react";
import CompSkillIndustryExperts from "./CompSkillIndustryExperts";

export const metadata = {
  title: '10 Essential Skills for Industry Experts in 2026',
  description: 'Discover the 10 essential skills for industry experts in 2026, from AI literacy to strategic thinking, data analysis, and personal branding for career growth.',
  openGraph: {
    title: '10 Essential Skills for Industry Experts in 2026',
    description:
      'Discover the 10 essential skills for industry experts in 2026, from AI literacy to strategic thinking, data analysis, and personal branding for career growth.',
    url: 'https://www.universalstreamsolution.com/blog/essential-skills-industry-experts-2026',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-industry-skill-expert.webp',
        width: 1200,
        height: 630,
        alt: '10 Essential Skills for Industry Experts in 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Essential Skills for Industry Experts in 2026',
    description:
      'Discover the 10 essential skills for industry experts in 2026, from AI literacy to strategic thinking, data analysis, and personal branding for career growth.',
    images: ['/images/blog-industry-skill-expert.webp'],
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
  return <CompSkillIndustryExperts />
};

export default page;
