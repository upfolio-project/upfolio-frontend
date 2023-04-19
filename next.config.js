/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false,

    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    async redirects() {
        return [
            {
                source: "/register",
                destination: "/register/enterPhone",
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;
