import type { NextConfig } from "next";

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['cdn-api.elice.io']
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
