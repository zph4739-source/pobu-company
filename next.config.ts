import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pobu-company",
  assetPrefix: "/pobu-company",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
