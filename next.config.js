/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false,

    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    }
};

module.exports = nextConfig;
