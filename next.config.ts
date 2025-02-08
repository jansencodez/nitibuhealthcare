import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, //  if images are not displaying in production
  },
};

export default nextConfig;
