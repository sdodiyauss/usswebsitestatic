const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.universalstreamsolution.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/admin/", "/*.php$", "/*.php/page/*", ".mp4"],
      },
      {
        userAgent: "OAI-SearchBot",
        disallow: ["/*.php$"],
      },
      {
        userAgent: "ChatGPT-User",
        disallow: ["/*.php$"],
      },
      {
        userAgent: "ClaudeBot",
        disallow: ["/*.php$"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/*.php$"],
      },
      {
        userAgent: "PerplexityBot",
        disallow: ["/*.php$"],
      },
      {
        userAgent: "Applebot-Extended",
        disallow: ["/*.php$"],
      },
    ],
    sitemap: `${BASE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
