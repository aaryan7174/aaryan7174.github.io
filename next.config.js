/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/aaryan7174.github.io",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
};

module.exports = nextConfig;
