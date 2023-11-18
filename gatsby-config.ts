import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `iizuka0000`,
        siteUrl: `https://iizuka-0000.github.io/portfolio`,
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
        {
            resolve: 'gatsby-source-rss-feed',
            options: {
                url: 'https://note.com/iizuka0000/rss',
                name: 'NoteBlog',
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['G-BPHN71Y8LJK'],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
    pathPrefix: '/portfolio',
};

export default config;
