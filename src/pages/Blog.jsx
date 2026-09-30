import { useParams , useSearchParams,useLocation } from "react-router"
import { Navigate } from "react-router"
import HeaderMenu from "../layouts/HeaderMenu"

const Blog = () => {
  return (
    <>
    <div id="page">
    <HeaderMenu/>
 {/* <div id="header">
    <div>
      <a href="index.html" className="logo">
        <img src="images/logo.png" alt="" />
      </a>
      <ul id="navigation">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li className="menu">
          <a href="projects.html">Projects</a>
          <ul className="primary">
            <li>
              <a href="proj1.html">proj 1</a>
            </li>
          </ul>
        </li>
        <li className="menu selected">
          <a href="blog.html">Blog</a>
          <ul className="secondary">
            <li>
              <a href="singlepost.html">Single post</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>*/}
  <div id="body">
    <div className="header">
      <div>
        <h1>Blog</h1>
        <div className="article">
          <ul>
            <li>
              <a href="singlepost.html">
                <img src="/src/assets/artwork/astronaut.jpg" alt="" />
              </a>
              <h1>SUCCESFUL REPAIR OF THE MX-1 SAT</h1>
              <span>FEBRUARY 6, 2023</span>
              <p>
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text.
              </p>
              <a href="singlepost.html" className="more">
                Read More
              </a>
            </li>
            <li>
              <a href="singlepost.html">
                <img src="/src/assets/artwork/satellite-dish.jpg" alt="" />
              </a>
              <h1>ALIEN SIGNAL DISCOVERY</h1>
              <span>FEBRUARY 3, 2023</span>
              <p>
                You can remove any link to our website from this website
                template, you're free to use this website template without
                linking back to us.
              </p>
              <a href="singlepost.html" className="more">
                Read More
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar">
          <ul>
            <li>
              <h1>FEATURED POSTS</h1>
              <a href="singlepost.html">
                <img src="/src/assets/artwork/moon-satellite.jpg" alt="" />
              </a>
              <h2>SOYUZ TMA-M</h2>
              <span>FEBRUARY 6, 2023</span>
            </li>
            <li>
              <h1>RECENT POSTS</h1>
              <ul>
                <li>
                  <a href="singlepost.html">
                    <img src="/src/assets/artwork/alien-life.jpg" alt="" />
                  </a>
                  <h2>ALIEN LIFE</h2>
                  <span>FEBRUARY 3, 2023</span>
                </li>
                <li>
                  <a href="singlepost.html">
                    <img src="/src/assets/artwork/galaxy.jpg" alt="" />
                  </a>
                  <h2>THE GALAXY</h2>
                  <span>FEBRUARY 1, 2023</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>

    </>
  )
}

export default Blog