import React from 'react'

export const BlogCard = (props) => {
return (
<>

            <li>
              <Link to="/singlepost/1">
                <img src="/src/assets/artwork/astronaut.jpg" alt="" />
              </Link>
              <h1>{prop.title}</h1>
              <span>FEBRUARY 6, 2023</span>
              <p>
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text.
              </p>
              <Link to="/singlepost/1" className="more">
                Read More
              </Link>
            </li>
</>
)
}
