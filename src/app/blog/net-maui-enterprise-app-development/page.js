import React from "react";
import CompMauiEnterprise from "./CompMauiEnterprise";

export const metadata = {
  title: 'Why .NET MAUI is Best for Cross-Platform Enterprise Apps',
  description: 'Discover how .NET MAUI enables scalable enterprise apps with cloud backend integration. Explore benefits, real-world use cases, and custom solutions.',
  openGraph: {
    title: 'Why .NET MAUI is Best for Cross-Platform Enterprise Apps',
    description:
      'Discover how .NET MAUI enables scalable enterprise apps with cloud backend integration. Explore benefits, real-world use cases, and custom solutions.',
    url: 'https://www.universalstreamsolution.com/blog/net-maui-enterprise-app-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-dot-net-maui-ideal-choice.webp',
        width: 1200,
        height: 630,
        alt: 'Why .NET MAUI is Best for Cross-Platform Enterprise Apps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why .NET MAUI is Best for Cross-Platform Enterprise Apps',
    description:
      'Discover how .NET MAUI enables scalable enterprise apps with cloud backend integration. Explore benefits, real-world use cases, and custom solutions.',
    images: ['/images/blog-dot-net-maui-ideal-choice.webp'],
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
  return <CompMauiEnterprise />
};

export default page;
