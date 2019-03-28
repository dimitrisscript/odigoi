import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Car from "../components/car"

const cars = [
  { image: "icon.png", title: "Μαλάκας 1", description: "Είσαι μαλάκας!", tags: "Παρκάρισμα".split("|") },
  { image: "icon.png", title: "Μαλάκας 2", description: "Είσαι μαλάκας2!", tags: "Παρκάρισμα2".split("|") },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Αρχική" keywords={`μαλάκες|οδηγοί|φανάρια|πεζοδρόμια`.split(`|`)} />
    <Image />
    {cars.map(car => (
      <Car key={car.image} {...car} />
    ))}
  </Layout>
)

export default IndexPage
