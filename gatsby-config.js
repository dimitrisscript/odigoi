module.exports = {
  siteMetadata: {
    title: `Μαλάκες Οδηγοί!`,
    description: `Μία συλλογή από φωτογραφίες από αυτοκίνητα και μηχανάκια τα οποία οδηγούν μαλάκες.`,
    author: `malakes-odigoi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Μαλάκες Οδηγοί`,
        short_name: `Μαλάκες Οδηγοί`,
        start_url: `/`,
        background_color: `#ffff00`,
        theme_color: `#ffff00`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
