import React from "react"
import PropTypes from "prop-types"

function Car({ image, title, description, tags, date }) {
  return (
    <div className="Car">
      <h3>{title}</h3>
      <p>
        <img src="https://placekitten.com/200/60" alt="todo" />
      </p>
      {description && <p className="description">{description}</p>}
      <div className="meta">
        {tags.length > 0 && (
          <ul className="tags">
            {tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <time dateTime={date}>{date}</time>
      </div>
    </div>
  )
}

Car.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string.isRequired,
}

export default Car
