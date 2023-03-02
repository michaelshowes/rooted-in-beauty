/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  // Enables support for importing SVGs as components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    // Enables topLevelAwait
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    };
    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'localhost'
      }
    ],
    domains: ['images.pexels.com']
  }
};

module.exports = nextConfig;
