/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048],
  },
  reactStrictMode: true,
}
