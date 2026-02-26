import React from "react";
import CompMasteringVueJS from "./CompMasteringVueJS";

export const metadata = {
  title: 'Mastering Vue.js 3 for Modern Web Development & Performance',
  description: 'Discover how Vue.js 3 enables fast, scalable, and modern web applications. Learn key features, performance benefits, and why it’s ideal for frontend development and web development consultation booking.',
  openGraph: {
    title: 'Mastering Vue.js 3 for Modern Web Development & Performance',
    description:
      'Discover how Vue.js 3 enables fast, scalable, and modern web applications. Learn key features, performance benefits, and why it’s ideal for frontend development and web development consultation booking. ',
    url: 'https://www.universalstreamsolution.com/blog/mastering-vuejs-3-modern-web-development',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-mastering-vue-js.webp',
        width: 1200,
        height: 630,
        alt: 'Mastering Vue.js 3 for Modern Web Development & Performance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mastering Vue.js 3 for Modern Web Development & Performance',
    description:
      'Discover how Vue.js 3 enables fast, scalable, and modern web applications. Learn key features, performance benefits, and why it’s ideal for frontend development and web development consultation booking. ',
    images: ['/images/blog-mastering-vue-js.webp'],
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
  return <CompMasteringVueJS />
};

export default page;
