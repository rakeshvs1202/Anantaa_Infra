/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  reactStrictMode: true,
  trailingSlash: true, 
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;