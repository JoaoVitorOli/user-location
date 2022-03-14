/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'jp'],
    defaultLocale: "pt",
    localeDetection: true
  },
}

module.exports = nextConfig
