import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  devIndicators: false,
};

export default nextConfig;
