import React from "react"
import PropTypes from "prop-types"
import { renderCarImage } from "../data"

function Car({ id, title, description, tags, date }) {
  return (
    <div className="Car" id={id}>
      <header>
        <h3><a href={`#${id}`}><span className="code">#{id}: </span>{title}</a></h3>
        <div className="meta">
          <time dateTime={date}>{date}</time>
          {tags.length > 0 && (
            <ul className="tags">
              {tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </header>
      {renderCarImage(id)}
      {description && <p className="description">{description}</p>}
    </div>
  )
}

Car.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string.isRequired,
}

export default Car
