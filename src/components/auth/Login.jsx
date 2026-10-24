import React from 'react'

export const Login = ({submitLoginHandler,setLoginOr}) => {
  return (
  <>  
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
  
  </>
  )
}
