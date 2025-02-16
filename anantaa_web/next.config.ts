import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // Ensures URLs end with a slash
  output: "export", // Required if using `next export` for static deployment
};

export default nextConfig;
