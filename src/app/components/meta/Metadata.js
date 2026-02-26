// src/components/Metadata.js

import { useEffect } from 'react';

const Metadata = ({ title, description }) => {
  useEffect(() => {
    // Dynamically update the page title
    if (title) {
      document.title = title;
    }

    // Dynamically update the meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [title, description]);

  return null;  
};

export default Metadata;