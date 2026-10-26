import   { useContext, useEffect,   useState } from 'react'
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
    const  AuthObj  = useContext(UserContext);
    const navigate = useNavigate();
    const [projects,setPropjects] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



        useEffect(() => {
        const giveUserPosts = async () =>{
        const token = AuthObj.auth?.access_token;
        const userUuid = AuthObj.auth?.user?.id; 
          if (!userUuid || !token) {
            console.log("User not logged in");
              return;
          }
        try {
          Api(token, "projects", `?user_id=eq.${userUuid}&order=created_at.desc`).then(Data => setPropjects(Data));

      } catch (error) {
        console.error(error);
      }
  }
giveUserPosts()
        },[AuthObj.auth?.access_token])



  const submitRegisterHandler = (e) =>{
      e.preventDefault();
    const formData = new FormData(e.target);
      const Name = formData.get(`Name`)
    const password = formData.get(`password`)
    const repeat_password = formData.get(`repeat-password`)
    const email = formData.get(`Email`)
    if(!Name){return alert("write your name")}
    if(!email){return alert("write your email ")}
    if(!password){return alert("write your password")}
    if ((password.length || 0) < 6) {
          return alert("The password must be 6 or more characters.");
        }
  if(repeat_password !== password){return alert("passwords do not match")}

    try{
  AuthObj.SignupHandler({
      data: {
      display_name: Name,},
      password,
      email,

    })
  }catch(error){
    alert(error)

  }
  }

  const submitLoginHandler = (e) =>{
      e.preventDefault();
    const formData = new FormData(e.target);
    const password =formData.get(`password`)
    const email =formData.get(`Email`)
    if ((password.length || 0) < 6) {
          return alert("The password must be 6 or more characters.");
        }
    AuthObj.LoginHandler({email,password})
  }
 

  if(AuthObj.auth){return(
    <>
      <div id="page">
    <HeaderMenu/>
      <div id="body">
         <div className="header">
          <div className='monochrome-box-menu'>
        <Link to="/create/project"><h2 className='monochrome-box-element'>createProject</h2></Link>
        <button onClick={AuthObj.logout} className='monochrome-box-element'>LOGOUT</button>
          </div>
          <div>
        <h2>Hello {AuthObj.auth.user.user_metadata.display_name}</h2>
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
        <div className='body'>
          <div className='header'>
        {LoginOr ? (
          <>
          <Login 
            LoginPassword={setPassword} 
            LoginEmail={setEmail}
            submitLoginHandler={submitLoginHandler} 
          />
            <button 
            onClick={() => setLoginOr(false)} 
            style={{  
              width: "100%"
            }}
            className='monochrome-button '
          >
          Register
          </button>
          </>
        ) : (
          <>
          <Register
            setLoginOr={setLoginOr} 
            submitRegisterHandler={submitRegisterHandler} 
          />
                    <button 
            onClick={() => setLoginOr(true)} 
            style={{  
              width: "100%"
            }}
            className='monochrome-button'
          >
            Login
          </button>
          </>
        )}
        </div>
        </div>
        <Footer/>
</div>
  </>
  )}
}

export default Contacts