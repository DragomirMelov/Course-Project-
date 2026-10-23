import  { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link, useParams } from 'react-router'
import Api from '../utils/requester';
import HeaderMenu from './HeaderMenu';
import { UserContext } from '../Context/userContext';

const Article = (props) => {
  const {projectid} = useParams();
  const [article,setArticle] = useState();
  const { deleteProject } = useContext(UserContext);
  

const deleteHandler = ( ) =>{
  deleteProject(projectid)
}

  useEffect(()=>{
          const fetchData = () =>{
          Api(null, "projects",`?id=eq.${projectid}`).then(data => setArticle(...data));
          }
      fetchData()
  },[])




if (article === undefined) return <p>Loading…</p>


return(
  <><HeaderMenu/>
<div id="page">
  <div id="body">
    <div className="header">
      <div>
        <h1>{article.title}</h1>
        <img src={article.image} alt="" />
          <span>{article.Date}</span>
        <p>
            {article.body}
          </p>          
          <p>
            {article.Article}
          </p>
        <button  onClick={deleteHandler}>Delite this</button>
        <Link  to={`/projects/edit/${projectid}`}><button>Edit this</button></Link>
      </div>
    </div>
  </div>
</div>
</>
)

}

export default Article