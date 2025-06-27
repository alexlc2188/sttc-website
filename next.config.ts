import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
};

export default nextConfig;
