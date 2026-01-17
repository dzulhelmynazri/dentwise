import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
    // unoptimized: true,
  },
  // Experimental: Try to work around Clerk compatibility issue with Next.js 16
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
    // Exclude Clerk from server bundling to avoid Server Action detection issues
  },
};

export default nextConfig;
