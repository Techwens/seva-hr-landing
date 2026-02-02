/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
