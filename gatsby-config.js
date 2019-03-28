module.exports = {
  siteMetadata: {
    title: `Μαλάκες Οδηγοί!`,
    description: `Μία συλλογή από φωτογραφίες από αυτοκίνητα και μηχανάκια τα οποία οδηγούν μαλάκες.`,
    author: `malakes-odigoi`,
    siteUrl: `https://malakes-odigoi.com`,
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
        display: `fullscreen`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
