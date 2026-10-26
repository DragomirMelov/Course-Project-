import React from 'react'

export const Login = ({submitLoginHandler,LoginPassword, LoginEmail}) => {
  return (
    <div id="body">
      <div className="header">
        <div className="contact">
          <h1>Login</h1>
          


          <form onSubmit={submitLoginHandler}>
            <input type="email" name="Email" placeholder="Email Address" onChange={(e) => LoginEmail(e.target.value)} required/>
            <input type="password" name="password" placeholder="password" onChange={(e) => LoginPassword(e.target.value)} required/>
            <input type="submit" defaultValue="Send" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
