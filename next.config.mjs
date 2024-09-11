/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "https://www.kulturbullar.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
