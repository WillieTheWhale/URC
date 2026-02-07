import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/URC",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
