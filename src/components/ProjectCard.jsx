import React from 'react'

export const ProjectCard = (props) => {
    console.log(props.imageUrl)
return (
    <>
              <li>
            <a href="proj1.html">
              <img src={props.imageUrl} alt="" />
            </a>
            <div>
              <h1>{props.title}</h1>
              <p>
                Our website templates are created with inspiration, checked for
                quality and originality and meticulously sliced and coded.
                What’s more, they’re absolutely free! You can do a lot with
                them. You can modify them. You can use them to design websites
                for clients, so long as you agree with the Terms of Use.
              </p>
              <a href="proj1.html" className="more">
                Read More
              </a>
            </div>
          </li>
    </>
)
  
  
}
