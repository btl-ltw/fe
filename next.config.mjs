/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        BACK_END_URL: process.env.BACK_END_URL,
    },
};

export default nextConfig;
