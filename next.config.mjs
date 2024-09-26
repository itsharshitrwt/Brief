/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env:{
        GROQ_API_KEY: process.env.GROP_API_KEY,
    }
};

export default nextConfig;
