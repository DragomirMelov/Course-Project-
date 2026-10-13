import React from 'react'
import HeaderMenu from '../components/HeaderMenu'

const Contacts = () => {
  return (
  <>
  <div id="page">
    <HeaderMenu/>
  <div id="body">
    <div className="header">
      <div className="contact">
        <h1>Contact</h1>
        <h2>DO NOT HESITATE TO CONTACT US</h2>
        <form action="index.html">
          <input
            type="text"
            name="Name"
            defaultValue="Name"
            onblur="this.value=!this.value?'Name':this.value;"
            onfocus="this.select()"
            onclick="this.value='';"
          />
          <input
            type="text"
            name="Email Address"
            defaultValue="Email Address"
            onblur="this.value=!this.value?'Email Address':this.value;"
            onfocus="this.select()"
            onclick="this.value='';"
          />
          <input
            type="text"
            name="Subject"
            defaultValue="Subject"
            onblur="this.value=!this.value?'Subject':this.value;"
            onfocus="this.select()"
            onclick="this.value='';"
          />
          <textarea
            name="message"
            cols={50}
            rows={7}
            defaultValue={"Message"}
          />
          <input type="submit" defaultValue="Send" id="submit" />
        </form>
      </div>
    </div>
  </div>
  <div id="footer">
    <div className="connect">
      <div>
        <h1>FOLLOW OUR MISSIONS ON</h1>
        <div>
          <a
            href="http://freewebsitetemplates.com/go/facebook/"
            className="facebook"
          >
            facebook
          </a>
          <a
            href="http://freewebsitetemplates.com/go/twitter/"
            className="twitter"
          >
            twitter
          </a>
          <a
            href="http://freewebsitetemplates.com/go/googleplus/"
            className="googleplus"
          >
            googleplus
          </a>
          <a href="http://pinterest.com/fwtemplates/" className="pinterest">
            pinterest
          </a>
        </div>
      </div>
    </div>
    <div className="footnote">
      <div>
        <p>© 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</p>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Contacts