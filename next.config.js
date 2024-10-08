/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: "/public",
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    apiPath: process.env.NEXT_PUBLIC_API_PATH,
    apiLimit: process.env.NEXT_PUBLIC_API_LIMIT,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
    storageKey: process.env.NEXT_PUBLIC_STORAGE_KEY,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["source.unsplash.com", "premiumlayers.com"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   appDir: true,
  //   esmExternals: "loose",
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

module.exports = nextConfig
