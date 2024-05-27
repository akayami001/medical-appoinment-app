/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "better-wealth-48913fa7ae.media.strapiapp.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "pics.freeicons.io",
        port: "",
      },

      {
        protocol: "https",
        hostname: "**.hearstapps.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "www.topgear.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pics.freeicons.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
