const SVGR_CONFIG = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...SVGR_CONFIG,
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
  compiler: {
    removeConsole: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
}
module.exports = nextConfig
