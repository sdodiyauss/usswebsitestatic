export const executeRecaptcha = (action) => {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.grecaptcha) {
      return resolve(null);
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action })
        .then((token) => resolve(token))
        .catch(() => resolve(null));
    });
  });
};


