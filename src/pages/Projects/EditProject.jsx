import React, { useContext, useEffect, useState } from 'react'
import HeaderMenu from '../../components/HeaderMenu'
import { useNavigate, useParams } from 'react-router';
import Api from '../../utils/requester';
import { UserContext } from '../../Context/userContext';
import Footer from '../../components/Footer';

const EditProject = () => {
  const {projectid} = useParams();
  const [article,setArticle] = useState();
        const {auth,editProject}   = useContext(UserContext);
        const navigate = useNavigate();

const submitHandler = (e) =>{
            e.preventDefault();
    const formData = new FormData(e.target);
    const title =  formData.get(`title`)
    const image = formData.get(`image`)
    const body = formData.get(`body`)
    const Article = formData.get(`Article`)

   const ProjectObj = {
        title,
        image,
        body,
        Article
    }

    editProject(projectid,ProjectObj);
    navigate("/projects");
}

    
    useEffect(()=>{
            const fetchData = () =>{
            const token = auth?.access_token;
            Api(token, "projects",`?id=eq.${projectid}`).then(data => setArticle(data[0]));
            }
        fetchData()
    },[])



     // 💥 FIX 
  if (article === undefined) return <h1>Loading...</h1>;
  if (article === null) return <h1>Project not found</h1>;
  return (
    
    <>
         <div id="page">
    <HeaderMenu/>
     <div id="body">
    <div className="header">
      <div className="contact">

        <h1>Create Project</h1>
        <img src={article.image} style={{ width: "380px", height: "217px" }}/>
        <form onSubmit={submitHandler} >
            <h2 >Change title</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={article.title}
          />
            <h2>Change image</h2>
          <input
            type="text"
            name="image"
            placeholder="image"
            defaultValue={article.image}
          />
            <h2>Change body</h2>
        <textarea
            name="body"
            cols={50}
            rows={7}
            placeholder="body of the PreView Component"
                        defaultValue={article.body}
        />
           <h2>Change Article</h2>
           
        <textarea
            style={{  height: "320px", }}
            name="Article"
            cols={70}
            rows={30}
            placeholder="Article"
                        defaultValue={article.Article}
        />
          <input type="submit" defaultValue="Send" id="submit"  />
        </form>
      </div>
    </div>
    <Footer/>
  </div>
    </div>
    </>
  )
}

export default EditProject