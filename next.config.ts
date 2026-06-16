import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'text/xml; charset=utf-8' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/extra-dungeon/1',
        destination: '/dungeon/32',
        permanent: true,
      },
      {
        source: '/extra-dungeon/2',
        destination: '/dungeon/33',
        permanent: true,
      },
      {
        source: '/extra-dungeon/3',
        destination: '/dungeon/34',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
