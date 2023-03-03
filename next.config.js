/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  publicRuntimeConfig:{
    googleAnalytics: {
      id: `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`
    }
  }
}

module.exports = nextConfig
