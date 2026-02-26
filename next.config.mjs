import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  // ➤ FIX: Efficient Cache Lifetimes
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Your existing Webpack config (unchanged)
  webpack(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};

    config.resolve.alias["@"] = path.resolve(process.cwd(), "public/images");
    config.resolve.alias["~"] = path.resolve(
      process.cwd(),
      "src/app/components"
    );

    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        { resourceQuery: /url/, type: "asset/resource" },
        { issuer: /\.[jt]sx?$/, use: ["@svgr/webpack"] },
      ],
    });

    return config;
  },
};

export default nextConfig;
