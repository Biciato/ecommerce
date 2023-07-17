/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.etimg.com",
        port: "",
        pathname: "/thumb/**",
      },
    ],
  },
};

module.exports = nextConfig;
