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
        hostname: "faithful-smile-d6918f5d1c.media.strapiapp.com",
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
