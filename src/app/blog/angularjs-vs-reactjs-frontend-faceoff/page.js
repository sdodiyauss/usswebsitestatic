import React from "react";
import CompWebDevelopment from "./CompWebDevelopment";

export const metadata = {
  title: 'AngularJS vs ReactJS: The Ultimate Frontend Face-Off',
  description: 'Compare AngularJS and ReactJS in this ultimate frontend showdown. Discover performance, features, and which framework suits your project best.',
  openGraph: {
    title: 'AngularJS vs ReactJS: The Ultimate Frontend Face-Off',
    description:
      'Compare AngularJS and ReactJS in this ultimate frontend showdown. Discover performance, features, and which framework suits your project best.',
    url: 'https://www.universalstreamsolution.com/blog/angularjs-vs-reactjs-frontend-faceoff',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-webdevelopment.webp',
        width: 1200,
        height: 630,
        alt: 'AngularJS vs ReactJS: The Ultimate Frontend Face-Off',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AngularJS vs ReactJS: The Ultimate Frontend Face-Off',
    description:
      'Compare AngularJS and ReactJS in this ultimate frontend showdown. Discover performance, features, and which framework suits your project best.',
    images: ['/images/blog-webdevelopment.webp'],
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
  return <CompWebDevelopment />
};

export default page;
