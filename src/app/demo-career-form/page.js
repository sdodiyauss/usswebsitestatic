import React from "react";
import ContactcareerDemo from "../components/contact/ContactcareerDemo";

export const metadata = {
  title: "Demo Career Form | USS IT Services",
  description:
    "Test the USS career inquiry form in a dedicated demo environment.",
  robots: {
    index: false,
    follow: false,
  },
};

const DemoCareerFormPage = () => {
  return <ContactcareerDemo />;
};

export default DemoCareerFormPage;

