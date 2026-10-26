import React from 'react'

const Register = ({ setLoginOr, submitRegisterHandler }) => {
  return (
    <div id="body">
      <div className="header">
        <div className="contact">
          <h1>Register</h1>
          <form onSubmit={submitRegisterHandler}>
            <input type="text" name="Name" placeholder="Name" />
            <input type="email" name="Email" placeholder="Email Address" /> {/* Changed to type="email" */}
            <input type="password" name="password" placeholder="password" />
            <input type="password" name="repeat-password" placeholder="repeat password" />
            <input type="submit" defaultValue="Send" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
