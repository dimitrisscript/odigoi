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
    description: "\"Πετάχτηκα στον μανάβη για 5 λεπτά ρε φίλε, τι θέλεις δηλαδή;\"",
    tags: "παρκάρισμα|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-08-27",
  },
  {
    id: 5,
    title: "Εδώ είναι το σπίτι μου.",
    description: "\"Μένω εδώ 15 χρόνια. Θα το παρκάρω όπου θέλω.\"",
    tags: "παρκάρισμα|πεζοδρόμιο".split("|"),
    date: "2018-09-03",
  },
  {
    id: 6,
    title: "Τέσσερα αμάξια ξεκουράζονται.",
    description: "Πάνω στο πεζοδρόμιο φυσικά. Όσοι χρειάζονται τη ράμπα, ας πάνε από το δρόμο.",
    tags: "παρκάρισμα|πεζοδρόμιο|ράμπα".split("|"),
    date: "2018-09-04",
  },
  {
    id: 7,
    title: "Smart Idiot.",
    description: "Εκεί βρήκε, εκεί το άφησε ο μαλάκας.",
    tags: "παρκάρισμα|πεζοδρόμιο|ποδηλατόδρομος".split("|"),
    date: "2018-09-04",
  },
  {
    id: 8,
    title: "Αρχοντικά αραγμένη στον ποδηλατόδρομο.",
    description: "Άλλη μία BMW η οποία στην προηγούμενη ζωή της ήτανε ποδήλατο.",
    tags: "παρκάρισμα|πεζοδρόμιο|ποδηλατόδρομος|bmw".split("|"),
    date: "2018-09-07",
  },
  {
    id: 9,
    title: "\"Και που να το αφήσω ρε φίλε;\"",
    description: "Κάνε την δουλειά σου και μην σε νοιάζει για τους άλλους. Στο background άλλα 3 αμάξια που έχουν μετατρέψει το πεζοδρόμιο σε \"αυτοκινητοδρόμιο\".",
    tags: "παρκάρισμα|πεζοδρόμιο|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-09-07",
  },
  {
    id: 911,
    title: "Under Construction - Υπομονή μέχρι να τα ανεβάσω!\"",
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
    image5: file(relativePath: { eq: "IMG_20180903_200224.jpg" }) {...servicesImage}
    image6: file(relativePath: { eq: "IMG_20180904_184043.jpg" }) {...servicesImage}
    image7: file(relativePath: { eq: "IMG_20180904_184122.jpg" }) {...servicesImage}
    image8: file(relativePath: { eq: "IMG_20180907_193752.jpg" }) {...servicesImage}
    image9: file(relativePath: { eq: "IMG_20181021_130938.jpg" }) {...servicesImage}
    image911: file(relativePath: { eq: "under-construction.png" }) {...servicesImage}
  }
`

export const renderCarImage = id => (
  <StaticQuery query={imagesQuery} render={data => <Img fluid={data[`image${id}`].childImageSharp.fluid} />} />
)
