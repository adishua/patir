/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Cloudflare Pages compatibility
  trailingSlash: true,
}

export default nextConfig
