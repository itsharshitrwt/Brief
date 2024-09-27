/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env:{
        GROQ_API_KEY: process.env.GROP_API_KEY,
        NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
    }
};

export default nextConfig;
