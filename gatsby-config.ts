import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `portfolio`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `iizuka0000`,
                short_name: `iizuka0000`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: './src/assets/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-favicons',
            options: {
                logo: './src/assets/icon.png',
                appName: 'iizuka0000',
                background: '#fff',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    yandex: false,
                    windows: false,
                },
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: './src/assets/',
            },
        },
        {
            resolve: 'gatsby-source-rss-feed',
            options: {
                url: 'https://zenn.dev/iizuka0000/feed',
                name: 'ZennBlog',
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [process.env.GA_TRACKING_ID || 'G-XXXXXXXXXX'],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
};

export default config;
