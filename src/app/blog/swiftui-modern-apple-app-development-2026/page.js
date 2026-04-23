import React from "react";
import CompSwiftUIModernAppleApp from "./CompSwiftUIModernAppleApp";

export const metadata = {
  title: 'SwiftUI in 2026: Benefits, Trends & Apple App Development Guide',
  description: 'Discover why SwiftUI is the future of Apple app development in 2026. Learn its benefits, trends, and how to build scalable apps. Get project estimation in 30 mins.',
  openGraph: {
    title: 'SwiftUI in 2026: Benefits, Trends & Apple App Development Guide',
    description:
      'Discover why SwiftUI is the future of Apple app development in 2026. Learn its benefits, trends, and how to build scalable apps. Get project estimation in 30 mins.',
    url: 'https://www.universalstreamsolution.com/blog/swiftui-modern-apple-app-development-2026',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-swiftui-for-modern-apple-platforms.webp',
        width: 1200,
        height: 630,
        alt: 'SwiftUI in 2026: Benefits, Trends & Apple App Development Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwiftUI in 2026: Benefits, Trends & Apple App Development Guide',
    description:
      'Discover why SwiftUI is the future of Apple app development in 2026. Learn its benefits, trends, and how to build scalable apps. Get project estimation in 30 mins.',
    images: ['/images/blog-swiftui-for-modern-apple-platforms.webp'],
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
  return <CompSwiftUIModernAppleApp />
};

export default page;
