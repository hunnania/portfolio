/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // Allow images from any domain and mark as unoptimized for simpler development
    unoptimized: true,
  },
}

module.exports = nextConfig