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
        source: '/hiline',
        destination: '/onboarding/hiline',
      }, {
        source: '/digitaldealer',
        destination: '/events/digitaldealer',
      }, {
        source: '/manly',
        destination: '/onboarding/manly',
      }, {
        source: '/darien',
        destination: '/onboarding/darien',
      }, {
        source: '/tomgibbs',
        destination: '/onboarding/tomgibbs',
      }, {
        source: '/tenafly',
        destination: '/onboarding/tenafly',
      }, {
        source: '/bmwsch',
        destination: '/onboarding/bmwsch',
      }, 
    ]
  },
}

module.exports = nextConfig
