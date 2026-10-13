import React from 'react'
import Sidebar from './Sidebar'

const Article = (props) => {
    return (
    <>
    <div className="header">
      <div>
        <h1>Single Post</h1>
        <div className="article">
          <img src="/src/assets/artwork/martianrover-journey.jpg" alt="" />
          <h1>{props.title}</h1>
          <span>{props.Date}</span>
          <p>
            {props.Paragraph1}
          </p>
          <p>
            {props.Paragraph2}
          </p>
        </div>
          <Sidebar/>
      </div>
    </div>
    </>
)
}

export default Article