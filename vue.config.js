const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0, 10),
        priority:1,
        changefreq: 'yearly'
    },
    {
        path: '/about',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.9,
        changefreq: 'yearly'
    },
    {
        path: '/tech',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'yearly'
    },
    {
        path: '/service',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.7,
        changefreq: 'yearly'
    },
    {
        path: '/solution',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.6,
        changefreq: 'yearly'
    },
    {
        path: '/contact',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.5,
        changefreq: 'yearly'
    },

];

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({
                base: 'https://www.authtech.com.tw', paths, options: {
                    filename: 'sitemap.xml',
                    lastmod: true,
                }
            })
        ]
    },
}

