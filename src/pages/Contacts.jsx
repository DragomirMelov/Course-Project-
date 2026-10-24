import React, { useContext, useRef, useState } from 'react'
import HeaderMenu from '../components/HeaderMenu'
import { UserContext } from '../Context/userContext';
import { Link, useNavigate } from 'react-router';


const Contacts = () => {
    const [LoginOr, setLoginOr] = useState(true);
    const  setAuth  = useContext(UserContext);
        const navigate = useNavigate();

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
    const Login = (
       <div id="body">
    <div className="header">
      <div className="contact">
        <h1>login</h1>
              <h1 onClick={()=>{setLoginOr(false)}} style={{  
  backgroundColor: "#3c0f38",
  color: "#ffffff",
  cursor: "pointer",
  display: "block",
  float: "right",
  fontFamily: "Arial",
  fontSize: "14px",
  fontWeight: "normal",
  height: "32px",
  lineHeight: "31px",
  margin: 0,
  padding: 0,
  textAlign: "center",
  textTransform: "uppercase",
  width: "125px"}}>Register</h1>

        <form  onSubmit={submitLoginHandler} >
          <input
            type="text"
            name="Name"
            placeholder="Name"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
          />
          <input type="submit" defaultValue="Send" id="submit" />
      </form>
      </div>
    </div>
  </div>
    )
  const Register = (
 <div id="body">
    <div className="header">
      <div className="contact">

        <h1>Register</h1>
        <h1 onClick={()=>{setLoginOr(true)}}  style={{  
  backgroundColor: "#3c0f38",
  color: "#ffffff",
  cursor: "pointer",
  display: "block",
  float: "right",
  fontFamily: "Arial",
  fontSize: "14px",
  fontWeight: "normal",
  height: "32px",
  lineHeight: "31px",
  margin: 0,
  padding: 0,
  textAlign: "center",
  textTransform: "uppercase",
  width: "125px"}}>Login</h1>

        <form onSubmit={submitRegisterHandler}>
          <input
            type="text"
            name="Name"
            placeholder="Name"
          />
          <input
            type="text"
            name="Email"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            type="password"
            name="repeat-password"
            placeholder="repeat password"
          />
          <textarea
            name="message"
            cols={50}
            rows={7}
            placeholder="describe yourself"
          />
          <input type="submit" defaultValue="Send" id="submit"  />
        </form>
      </div>
    </div>
  </div>
  )

  
  return (
  <>
  <div id="page">
    <HeaderMenu/>

            {LoginOr ? Login : Register}
    <Link to="/create/project">createProject</Link>
    <h1 onClick={setAuth.logout}>LOGOUT</h1>
</div>
  </>
  )
}

export default Contacts