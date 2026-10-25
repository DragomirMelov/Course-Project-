import React, { useContext, useEffect, useRef, useState } from 'react'
import HeaderMenu from '../components/HeaderMenu'
import { UserContext } from '../Context/userContext';
import { Link, useNavigate } from 'react-router';
import { Login } from '../components/auth/Login';
import Register from '../components/auth/Register';
import Api from '../utils/requester';
import Footer from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';


const Contacts = () => {
    const [LoginOr, setLoginOr] = useState(true);
    const  setAuth  = useContext(UserContext);
    const navigate = useNavigate();
    const [projects,setPropjects] = useState([]);


        useEffect(() => {
        const giveUserPosts = async () =>{
        const token = setAuth.auth?.access_token;
        const userUuid = setAuth.auth?.user?.id; 
          if (!userUuid || !token) {
            console.log("User not logged in");
              return;
          }
        try {
          // Remember to add `&order=created_at.desc` if you want them sorted!
          Api(token, "projects", `?user_id=eq.${userUuid}&order=created_at.desc`).then(Data => setPropjects(Data));

      } catch (error) {
        console.error(error);
      }
  }
giveUserPosts()
        },[setAuth.auth?.access_token])


        //to delite this log
  console.log(setAuth)

  const submitRegisterHandler = (e) =>{
      e.preventDefault();
    const formData = new FormData(e.target);
      const Name = formData.get(`Name`)
    const password = formData.get(`password`)
    const repeat_password = formData.get(`repeat-password`)
    const email = formData.get(`Email`)
    const message = formData.get(`message`)

    try{
  setAuth.SignupHandler({
      data: {
      display_name: Name,},
      password,
      email,

    })
  }catch(error){
    alert(error)

  }
    navigate("/")
  }

  const submitLoginHandler = (e) =>{
      e.preventDefault();
    const formData = new FormData(e.target);
        const Name = formData.get(`Name`)
    const password =formData.get(`password`)
    const email =formData.get(`Email`)
    setAuth.LoginHandler({email,password,data: {display_name: Name,},})
  }
 


  if(setAuth.auth){return(
    <>
      <div id="page">
    <HeaderMenu/>
      <div id="body">
         <div className="header">
          <div className='monochrome-box-menu'>
        <Link to="/create/project"><h2 className='monochrome-box-element'>createProject</h2></Link>
        <h2 onClick={setAuth.logout} className='monochrome-box-element'>LOGOUT</h2>
          </div>
          <div>
        <h1>your posts</h1>
        <ul>
    {!projects || projects.length === 0 ? (<div className='monochrome-box'><h1>No posts found</h1><h1>Please create posts.</h1></div>): ( projects.map(Project => <ProjectCard key={Project.id} title={Project.title} Paragraph={Project.body} imageUrl={Project.image} link={Project.id} />))}
          </ul>
          </div>

      </div>
      </div>
            <Footer/>
    </div>
    </>
  )}
  else{
  return (
  <>
  <div id="page">
    <HeaderMenu/>
        
        {LoginOr ? (
          <Login 
            setLoginOr={setLoginOr} 
            submitLoginHandler={submitLoginHandler} 
          />
        ) : (
          <Register
            setLoginOr={setLoginOr} 
            submitRegisterHandler={submitRegisterHandler} 
          />
        )}
        <Footer/>
</div>
  </>
  )}
}

export default Contacts