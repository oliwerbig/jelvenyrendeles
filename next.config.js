/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    esmExternals: "loose", // required to make Konva & react-konva work
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
