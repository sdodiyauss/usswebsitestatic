import React from "react";
import CompDjangoFlask from "./CompDjangoFlask";

export const metadata = {
  title: 'Django vs Flask: Choose the Right Python Web Framework',
  description: 'Django vs Flask: Choose the Right Python Web Framework',
  openGraph: {
    title: 'Django vs Flask: Choose the Right Python Web Framework',
    description:
      'Django vs Flask: Choose the Right Python Web Framework',
    url: 'https://www.universalstreamsolution.com/blog/django-vs-flask-which-python-web-framework',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-backenddevelopment.webp',
        width: 1200,
        height: 630,
        alt: 'Django vs Flask: Choose the Right Python Web Framework',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Django vs Flask: Choose the Right Python Web Framework',
    description:
      'Django vs Flask: Choose the Right Python Web Framework',
    images: ['/images/blog-backenddevelopment.webp'],
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
  return <CompDjangoFlask />
};

export default page;
