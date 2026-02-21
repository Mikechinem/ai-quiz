/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.syncskills.com.au'], // syncskill images from payload
  },
};

export default nextConfig;
