import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config: any) {
    // Find the existing file loader rule for SVG
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));

    // Add new rules to handle SVG with @svgr/webpack
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // Handle SVG imports with ?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // Handle SVG imports without ?url
        use: ["@svgr/webpack"]
      }
    );

    // Exclude SVG from the default file-loader rule
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  }
};

export default nextConfig;
