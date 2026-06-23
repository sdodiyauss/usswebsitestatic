import React from "react";
import HowAISearchIsChangeSEO from "./HowAISearchIsChangeSEO";

export const metadata = {
  title: 'How AI Search Is Changing Traditional SEO in 2026: Complete Guide to SEO, AEO & GEO',
  description: 'Learn how AI Search is transforming traditional SEO in 2026. Discover actionable SEO, AEO, and GEO strategies to improve rankings, AI citations, visibility, and organic growth.',
  openGraph: {
    title: 'How AI Search Is Changing Traditional SEO in 2026: Complete Guide to SEO, AEO & GEO',
    description:
      'Learn how AI Search is transforming traditional SEO in 2026. Discover actionable SEO, AEO, and GEO strategies to improve rankings, AI citations, visibility, and organic growth.',
    url: 'https://www.universalstreamsolution.com/blog/how-ai-search-is-changing-traditional-seo-in-2026',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-how-ai-change-seo.webp',
        width: 1200,
        height: 630,
        alt: 'How AI Search Is Changing Traditional SEO in 2026: Complete Guide to SEO, AEO & GEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AI Search Is Changing Traditional SEO in 2026: Complete Guide to SEO, AEO & GEO',
    description:
      'Learn how AI Search is transforming traditional SEO in 2026. Discover actionable SEO, AEO, and GEO strategies to improve rankings, AI citations, visibility, and organic growth.',
    images: ['/images/blog-how-ai-change-seo.webp'],
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
  return <HowAISearchIsChangeSEO />
};

export default page;
