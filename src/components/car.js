import React from "react"
import PropTypes from "prop-types"
import { renderCarImage } from "../data"

function Car({ id, title, description, images, tags, date }) {
  return (
    <div className="Car" id={id}>
      <h3>
        <a href={`#${id}`}>
          <span className="code">#{id}: </span>
          {title}
        </a>
      </h3>
      {description && <p className="description">{description}</p>}
      {images.map((image, index)=>renderCarImage(image, index))}
      <div className="meta">
        <time dateTime={date}>{date}</time>
        {tags.length > 0 && (
          <ul className="tags">
            {tags.sort().map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

Car.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  images: PropTypes.array.isRequired,
  tags: PropTypes.array,
  date: PropTypes.string.isRequired,
}

export default Car
