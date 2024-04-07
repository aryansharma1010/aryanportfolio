/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i0.wp.com'], // Add the hostname here
    },
    webpack: (config) => {
        // Disable canvas alias resolution
        config.resolve.alias = {
            ...config.resolve.alias,
            canvas: false,
        };

        return config;
    },
};

export default nextConfig;
