/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output is for self-hosting; on Vercel it breaks the Turbopack
  // build (the standalone copy step reads next-server.js.nft.json, which
  // Vercel's minimal-trace mode never writes) and is ignored anyway.
  output: process.env.VERCEL ? undefined : "standalone",
};

module.exports = nextConfig;
