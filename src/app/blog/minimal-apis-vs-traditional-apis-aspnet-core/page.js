import React from "react";
import CompMinimalVSTraditionalApi from "./CompMinimalVSTraditionalApi";

export const metadata = {
  title: 'Minimal APIs vs Traditional APIs in ASP.NET Core | Complete Comparison',
  description: 'Compare Minimal APIs vs Traditional APIs in ASP.NET Core. Learn differences, advantages, disadvantages, performance, scalability, and when to use each for your next .NET application.',
  openGraph: {
    title: 'Minimal APIs vs Traditional APIs in ASP.NET Core | Complete Comparison',
    description:
      'Compare Minimal APIs vs Traditional APIs in ASP.NET Core. Learn differences, advantages, disadvantages, performance, scalability, and when to use each for your next .NET application.',
    url: 'https://www.universalstreamsolution.com/blog/why-dotnet-8-is-a-game-changer-for-enterprise-applications',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-minimal-vs traditional-api.webp',
        width: 1200,
        height: 630,
        alt: 'Minimal APIs vs Traditional APIs in ASP.NET Core | Complete Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minimal APIs vs Traditional APIs in ASP.NET Core | Complete Comparison',
    description:
      'Compare Minimal APIs vs Traditional APIs in ASP.NET Core. Learn differences, advantages, disadvantages, performance, scalability, and when to use each for your next .NET application.',
    images: ['/images/blog-minimal-vs traditional-api.webp'],
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
  return <CompMinimalVSTraditionalApi />
};

export default page;
