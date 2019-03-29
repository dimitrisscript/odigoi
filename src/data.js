import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const cars = [
  {
    id: 1,
    title: "Μία BMW κάνει ποδήλατο.",
    description: "Ο ΚΟΚ και η καλή συμπεριφορά είναι κάτι άγνωστο για τους οδηγούς BMW.",
    tags: "παρκάρισμα|ποδηλατόδρομος|bmw".split("|"),
    date: "2019-03-19",
  },
  {
    id: 2,
    title: "Έργο τέχνης.",
    description: "Τέσσερα αμάξια και ένα μηχανάκι αραγμένα βαθιά μέσα σε πεζοδρόμια ράμπες, διάβαση και οδηγό τυφλών, και για bonus, τσουπ, νάτος ο μαλάκας ο παπάκιας ο deliverας ανάποδο ρεύμα. Απλά μπουρδέλο.",
    tags: "παρκάρισμα|ανάποδα|παπάκι|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-02-01",
  },
  {
    id: 3,
    title: "Δεν θα περάσει κανείς από εκεί.",
    description: "Αλλά και να περάσει κανένας ανάπηρος, τυφλός ή με καρότσι, στα αρχίδια μου.",
    tags: "παρκάρισμα|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2019-03-06",
  },
  {
    id: 4,
    title: "Εμπόδιο.",
    description: "\"Πετάχτηκα στον μανάβη για 5 λεπτά ρε φίλε, τι θέλεις δηλαδή;",
    tags: "παρκάρισμα|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-08-27",
  },
  {
    id: 999,
    title: "Under Construction - Υπομονή μέχρι να τα ανεβάσω!",
    description: "Όπως τον παλιό καλό καιρό.",
    tags: "website|todo".split("|"),
    date: "2019-03-28",
  },
]

const imagesQuery = graphql`
  fragment servicesImage on File {
    childImageSharp {
      fluid(maxWidth: 1024, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  # prettier-ignore
  query {
    image1: file(relativePath: { eq: "IMG_20190319_174455.jpg" }) {...servicesImage}
    image2: file(relativePath: { eq: "IMG_20180201_085038.jpg" }) {...servicesImage}
    image3: file(relativePath: { eq: "IMG_20190306_090443.jpg" }) {...servicesImage}
    image4: file(relativePath: { eq: "IMG_20180827_201816.jpg" }) {...servicesImage}
    image999: file(relativePath: { eq: "under-construction.png" }) {...servicesImage}
  }
`

export const renderCarImage = id => (
  <StaticQuery query={imagesQuery} render={data => <Img fluid={data[`image${id}`].childImageSharp.fluid} />} />
)
