import React from "react";
import CompWhyDotNet8 from "./CompWhyDotNet8";

export const metadata = {
  title: 'Why .NET 8 Is a Game-Changer for Enterprise Applications in 2026',
  description: 'Discover why .NET 8 is transforming enterprise application development with cloud-native architecture, AI integration, scalability, security, and high-performance backend solutions for modern businesses.',
  openGraph: {
    title: 'Why .NET 8 Is a Game-Changer for Enterprise Applications in 2026',
    description:
      'Discover why .NET 8 is transforming enterprise application development with cloud-native architecture, AI integration, scalability, security, and high-performance backend solutions for modern businesses.',
    url: 'https://www.universalstreamsolution.com/blog/why-dotnet-8-is-a-game-changer-for-enterprise-applications',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-dot-net-game-changer.webp',
        width: 1200,
        height: 630,
        alt: 'Why .NET 8 Is a Game-Changer for Enterprise Applications in 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why .NET 8 Is a Game-Changer for Enterprise Applications in 2026',
    description:
      'Discover why .NET 8 is transforming enterprise application development with cloud-native architecture, AI integration, scalability, security, and high-performance backend solutions for modern businesses.',
    images: ['/images/blog-dot-net-game-changer.webp'],
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
  return <CompWhyDotNet8 />
};

export default page;
