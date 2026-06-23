import React from "react";
import CompReactNativeFormobileApp from "./CompReactNativeFormobileApp";

export const metadata = {
  title: 'Why Enterprises Are Switching to React Native for Mobile Apps',
  description: 'Discover why enterprises are switching to React Native for mobile app development. Learn how React Native enterprise applications help businesses reduce costs, improve scalability, accelerate development, and deliver seamless cross-platform user experiences.',
  openGraph: {
    title: 'Why Enterprises Are Switching to React Native for Mobile Apps',
    description:
      'Discover why enterprises are switching to React Native for mobile app development. Learn how React Native enterprise applications help businesses reduce costs, improve scalability, accelerate development, and deliver seamless cross-platform user experiences.',
    url: 'https://www.universalstreamsolution.com/blog/why-enterprises-are-switching-to-react-native-for-mobile-apps',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-react-native-for-mobile-app.webp',
        width: 1200,
        height: 630,
        alt: 'Why Enterprises Are Switching to React Native for Mobile Apps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Enterprises Are Switching to React Native for Mobile Apps',
    description:
      'Discover why enterprises are switching to React Native for mobile app development. Learn how React Native enterprise applications help businesses reduce costs, improve scalability, accelerate development, and deliver seamless cross-platform user experiences.',
    images: ['/images/blog-react-native-for-mobile-app.webp'],
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
  return <CompReactNativeFormobileApp />
};

export default page;
