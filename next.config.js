/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com']
  },
  async rewrites() {
    return [
      {
        source: '/griffin',
        destination: '/onboarding/griffin',
      }, {
        source: '/capital',
        destination: '/onboarding/capital',
      }, {
        source: '/digitaldealer',
        destination: '/events/digitaldealer',
      },
    ]
  },
}

module.exports = nextConfig
