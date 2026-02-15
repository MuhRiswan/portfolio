import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/project",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
