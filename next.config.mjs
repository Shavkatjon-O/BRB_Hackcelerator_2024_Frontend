/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.brb-titans.uz',
        port: '443',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
