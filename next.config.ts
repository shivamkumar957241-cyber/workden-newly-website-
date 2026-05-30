import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["10.22.92.135", "localhost"],
  async rewrites() {
    return [
      {
        source: '/blogs/:slug',
        destination: '/blogs/:slug.html',
      },
    ];
  },
};

export default nextConfig;
