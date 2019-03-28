import React from "react"
import PropTypes from "prop-types"

function Car({ image, title, description, tags }) {
  return <p>car: {title}</p>
}

Car.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array,
}

export default Car
