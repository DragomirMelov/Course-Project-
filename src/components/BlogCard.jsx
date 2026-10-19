import React from 'react'
import { Link } from 'react-router'

export const BlogCard = (props) => {



return (
<>

            <li>
              <Link to={`/blogs/${props.link}`}>
                <img src={props.imageUrl} alt="" />
              </Link>
              <h1>{props.title}</h1>
              <span>{props.date}</span>
              <Link to={`/blogs/${props.link}`} className="more">
                Read More
              </Link>
            </li>
</>
)
}
