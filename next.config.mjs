/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static export mode
  trailingSlash: true,     // Optional for SEO/static hosting
  images: {
    unoptimized: true      // Required for static export
  }
};

export default nextConfig;
