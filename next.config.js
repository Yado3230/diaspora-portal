/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  https: {
    key: "./.next/server/Coop_Server_Side_SSL_Cert.key",
    cert: "./.next/server/Coop_Server_Side_SSL_Cert.crt",
  },
};

module.exports = nextConfig;
