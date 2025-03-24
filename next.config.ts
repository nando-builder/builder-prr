import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@builder.io/sdk-react-nextjs"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
