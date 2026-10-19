import  { useEffect, useState } from 'react'
import HeaderMenu from '../components/HeaderMenu'
import { ProjectCard } from '../components/ProjectCard'
import Api from '../utils/requester'


const Project = () => {
  const [projects,setPropjects] = useState([]);
    useEffect(() => {
      const fetchData = () =>{
    Api(null, "projects","?order=created_at.desc ").then(data => setPropjects(data));
    }
      fetchData()
    },[])


useEffect(() => {
  console.log("projects is now:", projects);   // runs on mount AND after setProjects
}, [projects]);


  return (
  <>
<div id="page">
 <HeaderMenu/>
  <div id="body">
    <div className="header">
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map(Project => <ProjectCard key={Project.id} title={Project.title} Paragraph={Project.body} imageUrl={Project.image} link={Project.id} />)}
        </ul>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Project