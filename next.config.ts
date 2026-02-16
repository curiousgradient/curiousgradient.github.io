import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages with a repo name (e.g., username.github.io/repo-name),
  // uncomment and set basePath and assetPrefix:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
};

export default nextConfig;
