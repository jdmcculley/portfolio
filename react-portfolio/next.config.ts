import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  distDir: process.env.VERCEL ? ".next" : "/tmp/next-portfolio-build",
};

export default nextConfig;
