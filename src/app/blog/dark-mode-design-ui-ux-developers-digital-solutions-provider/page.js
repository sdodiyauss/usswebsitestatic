import React from "react";
import CompDarkModeDesignUIUX from "./CompDarkModeDesignUIUX";

export const metadata = {
  title: 'Dark Mode Design Best Practices for UI/UX Developers',
  description: 'Learn how UI/UX developers can implement dark mode effectively. Enhance usability, accessibility, and performance with practical tips and best practices from a leading digital solutions provider.',
  openGraph: {
    title: 'Dark Mode Design Best Practices for UI/UX Developers',
    description:
      'Learn how UI/UX developers can implement dark mode effectively. Enhance usability, accessibility, and performance with practical tips and best practices from a leading digital solutions provider.',
    url: 'https://www.universalstreamsolution.com/blog/dark-mode-design-ui-ux-developers-digital-solutions-provider',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-ux-developers.webp',
        width: 1200,
        height: 630,
        alt: 'Dark Mode Design Best Practices for UI/UX Developers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dark Mode Design Best Practices for UI/UX Developers',
    description:
      'Learn how UI/UX developers can implement dark mode effectively. Enhance usability, accessibility, and performance with practical tips and best practices from a leading digital solutions provider.',
    images: ['/images/blog-ux-developers.webp'],
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
  return <CompDarkModeDesignUIUX />
};

export default page;
