/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  crossOrigin: 'anonymous', // Thêm thuộc tính crossOrigin
  experimental: {
    optimizePackageImports: ['react-icons'],
    turbo: {
      // Bạn có thể thêm các tùy chọn khác ở đây nếu cần
    },
  },
};

export default nextConfig;
