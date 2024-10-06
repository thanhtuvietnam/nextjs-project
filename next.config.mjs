/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    experimental: {
        optimizePackageImports: ['package-name'],
        turbo: {
            // Bạn có thể thêm các tùy chọn khác ở đây nếu cần
        },
    },
    crossOrigin: 'anonymous', // Thêm thuộc tính crossOrigin
};

export default nextConfig;
