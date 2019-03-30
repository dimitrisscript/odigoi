import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Σχετικά" />
    <p>Η ιστοσελίδα αυτή παρουσιάζει φωτογραφίες από μαλάκες οδηγούς που οδηγούν ή παρκάρουν σαν μαλάκες.</p>
    <hr />

    <h3>Επικοινωνία:</h3>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Όνομα:
          <br />
          <input type="text" name="name" size="40" required />
        </label>
      </p>
      <p>
        <label>
          Email:
          <br />
          <input type="text" name="email" size="40" placeholder="προεραιτικό" />
        </label>
      </p>
      <p>
        <label>
          Μύνημα:
          <br />
          <textarea type="text" name="text" required />
        </label>
      </p>
      <p>
        <button type="submit">Αποστολή</button>
      </p>
    </form>
  </Layout>
)

export default AboutPage
