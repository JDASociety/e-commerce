/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com'
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com'
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'ih1.redbubble.net'
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com'
      },
    {
        protocol: 'https',
        hostname: 'i.etsystatic.com'
      }
    ]
  }
}

export default nextConfig
