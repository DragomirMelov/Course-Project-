import React from 'react'

const Register = ({ setLoginOr, submitRegisterHandler }) => {
  return (
    <div id="body">
      <div className="header">
        <div className="contact">
          <h1>Register</h1>
          
          <button 
            onClick={() => setLoginOr(true)} 
            style={{  
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
              border: "none",
              width: "125px"
            }}
          >
            Login
          </button>

          <form onSubmit={submitRegisterHandler}>
            <input type="text" name="Name" placeholder="Name" />
            <input type="email" name="Email" placeholder="Email Address" /> {/* Changed to type="email" */}
            <input type="password" name="password" placeholder="password" />
            <input type="password" name="repeat-password" placeholder="repeat password" />
            <textarea name="message" cols={50} rows={7} placeholder="describe yourself" />
            <input type="submit" defaultValue="Send" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
