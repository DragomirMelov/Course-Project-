import React, { useContext } from 'react'
import HeaderMenu from '../components/HeaderMenu'





import { UserContext } from '../Context/userContext';

let ProjectObj ={
    title: "",
    image: "",
    body: "",
    Article: ""

}



const CreateProject = () => {


  const { createProject } = useContext(UserContext);


const submitHandler = (e) =>{
        e.preventDefault();
    const formData = new FormData(e.target);
    const title =  formData.get(`title`)
    const image = formData.get(`image`)
    const body = formData.get(`body`)
    const Article = formData.get(`Article`)

    ProjectObj = {
        title,
        image,
        body,
        Article
    }

    createProject(ProjectObj)
}




  return (
    <>
      <div id="page">
    <HeaderMenu/>
     <div id="body">
    <div className="header">
      <div className="contact">

        <h1>Create Project</h1>

        <form onSubmit={submitHandler} >
          <input
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            type="text"
            name="image"
            placeholder="image"
          />
        <textarea
            name="body"
            cols={50}
            rows={7}
            placeholder="body of the PreView Component"
        />
        <textarea
             style={{  height: "320px", }}
            name="Article"
            cols={70}
            rows={30}
            placeholder="Article"
        />
          <input type="submit" defaultValue="Send" id="submit"  />
        </form>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default CreateProject