import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const cars = [
  {
    id: 1,
    title: "BMW στον ποδηλατόδρομο",
    description: "Ο ΚΟΚ και η καλή συμπεριφορά είναι κάτι άγνωστο για τους οδηγούς BMW.",
    tags: "παρκάρισμα|ποδηλατόδρομος|bmw".split("|"),
    date: "2019-03-19",
  },
  {
    id: 2,
    title: "Under Construction - Υπομονή μέχρι να τα ανεβάσω.",
    description: "Όπως τον παλιό καλό καιρό.",
    tags: "website|todo".split("|"),
    date: "2019-03-28",
  },
]

const imagesQuery = graphql`
  fragment servicesImage on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  # prettier-ignore
  query {
    image1: file(relativePath: { eq: "IMG_20190319_174455.jpg" }) {...servicesImage}
    image2: file(relativePath: { eq: "under-construction.png" }) {...servicesImage}
  }
`

export const renderCarImage = id => (
  <StaticQuery query={imagesQuery} render={data => <Img fluid={data[`image${id}`].childImageSharp.fluid} />} />
)
