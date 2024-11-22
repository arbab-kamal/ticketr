import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "compassionate-orca-730.convex.cloud", protocol: "https" },
      // { hostname: "wary-anaconda-29.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
