import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  distDir: "/tmp/next-portfolio-build",
};

export default nextConfig;
