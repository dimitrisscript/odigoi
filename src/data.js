import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const cars = [
  {
    id: 1,
    title: "Μία BMW κάνει ποδήλατο.",
    description: "Ο ΚΟΚ και η καλή συμπεριφορά είναι κάτι άγνωστο για τους οδηγούς BMW.",
    images: ['IMG_20190319_174455'],
    tags: "παρκάρισμα|ποδηλατόδρομος|bmw".split("|"),
    date: "2019-03-19",
  },
  {
    id: 2,
    title: "Έργο τέχνης.",
    description:
      "Τέσσερα αμάξια και ένα μηχανάκι αραγμένα βαθιά μέσα σε πεζοδρόμια ράμπες, διάβαση και οδηγό τυφλών, και για bonus, τσουπ, νάτος ο μαλάκας ο παπάκιας ο deliverας ανάποδο ρεύμα. Απλά μπουρδέλο.",
    images: ['IMG_20180201_085038'],
    tags: "παρκάρισμα|ανάποδα|παπάκι|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-02-01",
  },
  {
    id: 3,
    title: "Δεν θα περάσει κανείς από εκεί.",
    description: "Αλλά και να περάσει κανένας ανάπηρος, τυφλός ή με καρότσι, στα αρχίδια μου.",
    images: ['IMG_20190306_090443'],
    tags: "παρκάρισμα|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2019-03-06",
  },
  {
    id: 4,
    title: "Εμπόδιο.",
    description: '"Πετάχτηκα στον μανάβη για 5 λεπτά ρε φίλε, τι θέλεις δηλαδή;"',
    images: ['IMG_20180827_201816'],
    tags: "παρκάρισμα|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-08-27",
  },
  {
    id: 5,
    title: "Εδώ είναι το σπίτι μου.",
    description: '"Μένω εδώ 15 χρόνια. Θα το παρκάρω όπου θέλω."',
    images: ['IMG_20180903_200224'],
    tags: "παρκάρισμα|πεζοδρόμιο".split("|"),
    date: "2018-09-03",
  },
  {
    id: 6,
    title: "Τέσσερα αμάξια ξεκουράζονται.",
    description: "Πάνω στο πεζοδρόμιο φυσικά. Όσοι χρειάζονται τη ράμπα, ας πάνε από το δρόμο.",
    images: ['IMG_20180904_184043'],
    tags: "παρκάρισμα|πεζοδρόμιο|ράμπα".split("|"),
    date: "2018-09-04",
  },
  {
    id: 7,
    title: "Smart Idiot.",
    description: "Εκεί βρήκε, εκεί το άφησε ο μαλάκας.",
    images: ['IMG_20180904_184122'],
    tags: "παρκάρισμα|πεζοδρόμιο|ποδηλατόδρομος".split("|"),
    date: "2018-09-04",
  },
  {
    id: 8,
    title: "Αρχοντικά αραγμένη στον ποδηλατόδρομο.",
    description: "Άλλη μία BMW η οποία στην προηγούμενη ζωή της ήτανε ποδήλατο.",
    images: ['IMG_20180907_193752'],
    tags: "παρκάρισμα|πεζοδρόμιο|ποδηλατόδρομος|bmw".split("|"),
    date: "2018-09-07",
  },
  {
    id: 9,
    title: '"Και που να το αφήσω ρε φίλε;"',
    description:
      'Κάνε την δουλειά σου και μην σε νοιάζει για τους άλλους. Στο background άλλα 3 αμάξια που έχουν μετατρέψει το πεζοδρόμιο σε "αυτοκινητοδρόμιο".',
    images: ['IMG_20181021_130938'],
    tags: "παρκάρισμα|πεζοδρόμιο|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-10-21",
  },
  {
    id: 10,
    title: "Ο πεζός θα πάει από δίπλα.",
    description:
      "Οι ζωγραφισμένες άσπρες γραμμές και τα πλακάκια με τις τελίτσες πρέπει να είναι κάποια εικαστική παρέμβαση.",
    images: ['IMG_20181106_172448'],
    tags: "παρκάρισμα|πεζοδρόμιο|ράμπα|οδηγός τυφλών|διάβαση".split("|"),
    date: "2018-11-06",
  },
  {
    id: 11,
    title: "Το παρκάρισμα της χρονιάς.",
    description: "Έκλεισε και τον καθρέφτη του για το αμάξι που δεν χωράει να περάσει. Άγνωστο τι σκεφτότανε όταν το έκανε αυτό.",
    images: ['IMG_20181114_100827', 'IMG_20181114_101245'],
    tags: "παρκάρισμα|facepalm".split("|"),
    date: "2018-11-14",
  },
  {
    id: 99,
    title: 'Under Construction - Υπομονή μέχρι να τα ανεβάσω!"',
    description: "Όπως τον παλιό καλό καιρό.",
    images: ['under_construction'],
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
    IMG_20190319_174455: file(relativePath: { eq: "IMG_20190319_174455.jpg" }) {...servicesImage}
    IMG_20180201_085038: file(relativePath: { eq: "IMG_20180201_085038.jpg" }) {...servicesImage}
    IMG_20190306_090443: file(relativePath: { eq: "IMG_20190306_090443.jpg" }) {...servicesImage}
    IMG_20180827_201816: file(relativePath: { eq: "IMG_20180827_201816.jpg" }) {...servicesImage}
    IMG_20180903_200224: file(relativePath: { eq: "IMG_20180903_200224.jpg" }) {...servicesImage}
    IMG_20180904_184043: file(relativePath: { eq: "IMG_20180904_184043.jpg" }) {...servicesImage}
    IMG_20180904_184122: file(relativePath: { eq: "IMG_20180904_184122.jpg" }) {...servicesImage}
    IMG_20180907_193752: file(relativePath: { eq: "IMG_20180907_193752.jpg" }) {...servicesImage}
    IMG_20181021_130938: file(relativePath: { eq: "IMG_20181021_130938.jpg" }) {...servicesImage}
    IMG_20181106_172448: file(relativePath: { eq: "IMG_20181106_172448.jpg" }) {...servicesImage}
    IMG_20181114_100827: file(relativePath: { eq: "IMG_20181114_100827.jpg" }) {...servicesImage}
    IMG_20181114_101245: file(relativePath: { eq: "IMG_20181114_101245.jpg" }) {...servicesImage}
    under_construction: file(relativePath: { eq: "under-construction.png" }) {...servicesImage}
  }
`

export const renderCarImage = id => (
  <StaticQuery query={imagesQuery} render={data => <Img fluid={data[id].childImageSharp.fluid} />} />
)
