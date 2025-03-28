import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'personal_web';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default nextConfig;