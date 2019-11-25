module.exports = {
    siteMetadata: {
        title: `Title from siteMetadata`,
    },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `src`,
          path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
