import type { NextConfig } from "next";

const fs = require("fs");
const path = require("path");

const buildTime = new Date().toISOString();
fs.writeFileSync(
  path.join(__dirname, ".env.local"),
  `NEXT_PUBLIC_BUILD_TIME=${buildTime}\n`
);

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
