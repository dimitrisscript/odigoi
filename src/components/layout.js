/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import "./layout.css"
import "./layout-site.css"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

const Footer = () => (
  <footer className="Footer">
    <ul>
      <li>
        <Link to="/">Αρχική</Link>
      </li>
      <li>
        <Link to="/about">Σχετικά</Link>
      </li>
      <li>
        <a href="https://github.com/malakes-odigoi/website">Πιρούνιασε με στο GitHub</a>
      </li>
    </ul>
  </footer>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
