/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "https://www.kulturbullar.com/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
