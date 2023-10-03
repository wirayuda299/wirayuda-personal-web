/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**/*',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/**/*',
        port: ''
      },

    ],
    dangerouslyAllowSVG: true
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
