module.exports = {
  siteMetadata: {
    title: 'AIESEC in Manouba',
    description:
      'We are a youth leadership movement AIESEC is a global platform for young people to develop their leadership...',
    author: 'Local Support Team',
    siteUrl: 'https://lc-medina.netlify.app',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['./src/shared/styles/index'],
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AIESEC In Manouba',
        short_name: 'AIESEC In Manouba',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/assets/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-tawk',
      options: {
        tawkId: '5f6538ef4704467e89f04a58',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-redirect',
      options: {
        headers: {},
        allPageHeaders: ['/', '/about-us', '/lst', '/partnership'],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers) => headers,
        generateMatchPathRewrites: true,
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-offline',
  ],
  flags: { PRESERVE_WEBPACK_CACHE: true },
};
