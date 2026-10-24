import  { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link, useNavigate, useParams } from 'react-router'
import Api from '../utils/requester';
import HeaderMenu from './HeaderMenu';
import { UserContext } from '../Context/userContext';
import CreateComment from './Comments/CreateComment';
import Comment from './Comments/Comment';

const Article = (props) => {
  const {projectid} = useParams();
  const [article,setArticle] = useState();
  const [comments,setComments] = useState([]);
  const { deleteProject,auth } = useContext(UserContext);
    const navigate = useNavigate();
      const [refreshKey, setRefreshKey] = useState(0);

  const softRefresh = () => {
    setRefreshKey(prev => prev + 1); // Trigger re-render
  };

const submitHandlerCreateComment = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);

        
        if(!auth?.user?.id){alert("Register to comment")} 
        
   const newCmmnent = {
      project_id: projectid,
      author: auth.user.user_metadata.display_name,
      user_id: auth.user.id,
      text: formData.get(`text`),
   }
    
       try {
      await Api( auth?.access_token, "commentsprojects",``,"POST",newCmmnent);
      } catch (error) {
      console.error(error);
      throw error;   
      }
      e.target.reset()
      softRefresh()

}


const deleteHandler = ( ) =>{
  deleteProject(projectid)
}

  useEffect(()=>{
          const fetchData = async() =>{
            await Api( auth?.access_token, "projects",`?id=eq.${projectid}`).then(data => setArticle(...data));
          }
          const getComments = async() =>{
            await Api( auth?.access_token, "commentsprojects",`?project_id=eq.${projectid}`).then(data => setComments(data));
          }
      getComments()
      fetchData()
  },[refreshKey])

const user = auth?.user?.id; 

const isOwner = user && user === article?.user_id;
if (article === undefined) return <p>Loading…</p>

const Opt = (<><button className='monochrome-button' onClick={deleteHandler}>Delite this</button ><Link  to={`/projects/edit/${projectid}`}><button className='monochrome-button'>Edit this</button></Link></>)

console.log(comments)
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
          {isOwner ?Opt : null}

          <CreateComment submitHandlerCreateComment={submitHandlerCreateComment}  />
          
            {comments.map(Project => <Comment key={Project.id} text={Project.text} author={Project.author} data={Project.created_at} />)}
      </div>

    </div>
  </div>
</div>
</>
)

}

export default Article