/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
}

const withYAML = require('next-yaml')
module.exports = withYAML(module.exports)
