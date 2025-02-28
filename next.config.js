/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/shop",
          destination: "https://whiimsy.mini.site",
          permanent: false, // Change to true if this is a permanent redirect
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  