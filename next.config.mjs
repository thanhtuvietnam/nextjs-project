/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  crossOrigin: 'anonymous', // Thêm thuộc tính crossOrigin
  experimental: {
    optimizePackageImports: ['package-name'],
    turbo: {
      // Bạn có thể thêm các tùy chọn khác ở đây nếu cần
    },
  },
};

export default nextConfig;
