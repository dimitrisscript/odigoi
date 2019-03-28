import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Car from "../components/car"

import {cars} from "../data"

const IndexPage = () => (
  <Layout>
    <SEO title="Αρχική" keywords={`μαλάκες|οδηγοί|φανάρια|πεζοδρόμια`.split(`|`)} />
    {/*<Image />*/}
    {cars.map(car => (
      <Car key={car.image} {...car} />
    ))}
  </Layout>
)

export default IndexPage
