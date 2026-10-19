import  { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router'
import Api from '../utils/requester';
import HeaderMenu from './HeaderMenu';

const Article = (props) => {
  const {projectid} = useParams();
  const [article,setArticle] = useState();
  
  useEffect(()=>{
          const fetchData = () =>{
          Api(null, "projects",`?id=eq.${projectid}`).then(data => setArticle(...data));
          }
      fetchData()
  },[])
  useEffect(() => {
  console.log("projects is nowr", article);   // runs on mount AND after setProjects
}, [article]);


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
      </div>
    </div>
  </div>
</div>
</>
)

}

export default Article