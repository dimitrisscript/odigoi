import React, { PureComponent } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Car from "../components/car"
import { cars } from "../data"

export default class IndexPage extends PureComponent {

  componentDidMount() {
    // Handle possible hash on URL.
    if (window.location.hash) {
      const node = document.getElementById(window.location.hash.substr(1))
      if (node) node.scrollIntoView()
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Αρχική" keywords={`μαλάκες|οδηγοί|φανάρια|πεζοδρόμια`.split(`|`)} />
        {cars.map(car => (
          <Car key={car.id} {...car} />
        ))}
      </Layout>
    )
  }
}
