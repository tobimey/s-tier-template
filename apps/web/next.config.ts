import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  typedRoutes: true,
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
