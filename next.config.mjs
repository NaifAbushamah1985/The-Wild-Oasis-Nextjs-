/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "foldhnaclyniiydbbjak.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",

  experimental: {
    appDir: true, // Enable app directory support if needed
  },
};

export default nextConfig;
