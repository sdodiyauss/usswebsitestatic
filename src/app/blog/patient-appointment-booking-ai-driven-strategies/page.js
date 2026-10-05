import React from "react";
import CompPatientAppointment from "./CompPatientAppointment";

export const metadata = {
  title: 'How to Manage Patient Appointment Booking: AI-Driven Strategies',
  description: 'Learn how AI-driven patient appointment booking can improve scheduling, reminders, communication, rescheduling, and healthcare practice efficiency.',
  openGraph: {
    title: 'How to Manage Patient Appointment Booking: AI-Driven Strategies',
    description:
      'Learn how AI-driven patient appointment booking can improve scheduling, reminders, communication, rescheduling, and healthcare practice efficiency.',
    url: 'https://www.universalstreamsolution.com/blog/patient-appointment-booking-ai-driven-strategies',
    siteName: 'USS IT Services',
    images: [
      {
        url: '/images/blog-patient-appointment-booking-ai.webp',
        width: 1200,
        height: 630,
        alt: 'How to Manage Patient Appointment Booking: AI-Driven Strategies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Manage Patient Appointment Booking: AI-Driven Strategies',
    description:
      'Learn how AI-driven patient appointment booking can improve scheduling, reminders, communication, rescheduling, and healthcare practice efficiency.',
    images: ['/images/blog-patient-appointment-booking-ai.webp'],
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
  return <CompPatientAppointment />
};

export default page;
