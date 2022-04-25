/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

const withYAML = require('next-yaml');
module.exports = withYAML(module.exports);
