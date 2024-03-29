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
    githubToken: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  },
  images: {
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
}

module.exports = nextConfig
