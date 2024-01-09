const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
module.exports = {
  // Enable React's strict mode for enhanced development warnings
  reactStrictMode: true,

  // Determine whether URLs should have trailing slashes or not
  trailingSlash: SITE.trailingSlash,

  // Specify the base path for your application (if it's not hosted at the root of the domain)
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  // Enable SWC minification for code optimization
  swcMinify: true,

  // Disable the "X-Powered-By" HTTP header for improved security
  poweredByHeader: false,

  // Configure remote image domains for the Next.js Image component
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },

  // Enable the experimental feature that allows access to the app directory
  experimental: { appDir: true },
};
