/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains : ['docs-teltan.s3.amazonaws.com', 's3.amazonaws.com', 'http://186.96.176.5', 'api-production.s3.amazonaws.com', 'https://crmprospectos.herokuapp.com', 'localhost', 'http://127.0.0.1:3000/'], // <== Domain name
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs-teltan.s3.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
      {
        protocol: 'http',
        hostname: '186.96.176.5',
        port: '',
        pathname: '/public/**',
      },
    ],
  }
}

module.exports = nextConfig
