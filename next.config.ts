import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
  // @ts-ignore - Turbopack root might be a new or internal option mentioned in error logs
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
