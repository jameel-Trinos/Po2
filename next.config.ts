import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration for handling Node.js packages
  turbopack: {
    // Add any turbopack-specific settings here
  },
  // Configure webpack for compatibility with Node.js packages
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark packages and their dependencies as external for server-side builds
      config.externals = config.externals || [];
      config.externals.push('libreoffice-convert');
    }
    return config;
  },
  // Mark packages as external for server-side rendering
  serverExternalPackages: ['libreoffice-convert', 'canvas'],
};

export default nextConfig;
