/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "pics.freeicons.io",
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
