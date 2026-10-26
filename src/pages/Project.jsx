import  { useContext, useEffect, useState } from 'react'
import HeaderMenu from '../components/HeaderMenu'
import { ProjectCard } from '../components/ProjectCard'
import Api from '../utils/requester'

import { UserContext } from '../Context/userContext';
import Footer from '../components/Footer';

const Project = () => {
  const [projects,setPropjects] = useState([]);
  const { auth } = useContext(UserContext);
          const [refreshKey, setRefreshKey] = useState(0);

          const softRefresh = () => {
            setRefreshKey(prev => prev + 1); // Trigger re-render
          };

  const token = auth?.access_token;
    useEffect(() => {
      const fetchData = () =>{
    Api(token, "projects","?order=created_at.desc ").then(data => setPropjects(data));
    }
      fetchData()
    },[refreshKey])


  return (
  <>
<div id="page">
 <HeaderMenu/>
  <div id="body">
    <div className="header">
      <div>
        <button onClick={softRefresh} className='monochrome-button '>click to refresh</button>
        <h1>Projects</h1>
        <ul>
          {projects.map(Project => <ProjectCard key={Project.id} title={Project.title} Paragraph={Project.body} imageUrl={Project.image} link={Project.id} />)}
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</div>

  </>
  )
}

export default Project