/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withYAML = require('next-yaml')
module.exports = withYAML(module.exports)
