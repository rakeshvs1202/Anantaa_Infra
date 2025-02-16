/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Anantaa_Infra",
  reactStrictMode: true,
  trailingSlash: true, 
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;