import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);
