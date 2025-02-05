import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/louvre-roofs-hawkes-bay',
        destination: '/products/louvres',
        permanent: true
      },
      {
        source: '/outdoor-blinds-hawkes-bay',
        destination: '/products/blinds',
        permanent: true
      },
      {
        source: '/products',
        destination: '/',
        permanent: true
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/products/flat-patio-roofs',
        destination: '/products/blinds',
        permanent: true
      },
      {
        source: '/pergola-roofs-hawkes-bay',
        destination: '/products/patios',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
