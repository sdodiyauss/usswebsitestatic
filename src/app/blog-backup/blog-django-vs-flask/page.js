import React from "react";
import CompDjangoFlask from "./CompDjangoFlask";

export const metadata = {
  title: 'USS Blog – Insights, Tips & Tech Updates',
  description: 'Explore the USS blog for expert insights, industry trends, and actionable tips on tech, innovation, and business growth.',
}

const page = async () => {
  return <CompDjangoFlask />
};

export default page;
