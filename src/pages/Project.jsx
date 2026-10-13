import React from 'react'
import HeaderMenu from '../components/HeaderMenu'
import { ProjectCard } from '../components/ProjectCard'


const Paragraph  = {
    title: "MARS CURIOSITY ROVER",
    Paragraph: `Our website templates are created with inspiration, checked for
                quality and originality and meticulously sliced and coded.
                What’s more, they’re absolutely free! You can do a lot with
                them. You can modify them. You can use them to design websites
                for clients, so long as you agree with the Terms of Use.`,
    imageUrl: `/src/assets/artwork/curious-rover.jpg`
}

const Paragraph2 ={
      title: "INTERTERNATIONAL SPACE STATION",
    Paragraph: ` Looking for more templates? Just browse through all our Free
                Website Templates and find what you’re looking for. But if you
                don’t find any website template you can use, you can try our
                Free Web Design service and tell us all about it. Maybe you’re
                looking for something different, something special.`,
    imageUrl: `/src/assets/artwork/space-station.jpg`
}
const Project = () => {
  return (
  <>
<div id="page">
 <HeaderMenu/>
  <div id="body">
    <div className="header">
      <div>
        <h1>Projects</h1>
        <ul>
          <ProjectCard title={Paragraph.title} Paragraph={Paragraph.Paragraph} imageUrl={Paragraph.imageUrl} Link=""/>
          <ProjectCard title={Paragraph.title} Paragraph={Paragraph.Paragraph} imageUrl={Paragraph.imageUrl} Link=""/>
          <ProjectCard title={Paragraph2.title} Paragraph={Paragraph2.Paragraph} imageUrl={Paragraph2.imageUrl} Link=""/> 
        </ul>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Project