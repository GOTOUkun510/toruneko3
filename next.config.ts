import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
