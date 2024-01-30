import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `zuk246`,
        siteUrl: `https://zuk246.github.io/portfolio`,
        description: `zuk246のポートフォリオサイトです。`,
        lang: `ja`,
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                excludes: [`/404?(.*)`],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `zuk246`,
                short_name: `zuk246`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: './src/assets/favicon.png',
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
                url: 'https://note.com/zuk246/rss',
                name: 'NoteBlog',
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['G-BPHN71Y8LJ'],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
    pathPrefix: '/portfolio',
};

export default config;
