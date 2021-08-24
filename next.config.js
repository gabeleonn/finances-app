/** @type {import('next').NextConfig} */

const { execSync } = require('child_process');

const lastCommitCommand = 'git rev-parse HEAD';

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.woff2$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.mp4$/,
      use: 'file-loader?name=videos/[name].[ext]',
    });
    return config;
  },
  // async redirects() {
  //   return allRedirects;
  // },
  async generateBuildId() {
    return execSync(lastCommitCommand).toString().trim();
  },
};

// const allRedirects = [{ sorce: '', destination: '', statusCode: 301 }];
