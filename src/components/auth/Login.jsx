import React from 'react'

export const Login = ({submitLoginHandler,setLoginOr}) => {
  return (
    <div id="body">
      <div className="header">
        <div className="contact">
          <h1>Login</h1>
          


          <form onSubmit={submitLoginHandler}>
            <input type="email" name="Email" placeholder="Email Address" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" defaultValue="Send" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
