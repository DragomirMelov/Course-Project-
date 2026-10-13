import { useParams , useSearchParams,useLocation, Link } from "react-router"
import { Navigate } from "react-router"
import HeaderMenu from "../components/HeaderMenu"
import Sidebar from "../components/Sidebar"
import { BlogCard } from "../components/BlogCard"

const Blog = () => {
const Card = {
  title: "SUCCESFUL REPAIR OF THE MX-1 SAT",
  link: "",
  imageUrl: "",
  Date: "",
  Paragraph: ``
}
const Card2 = {
  title: "",
  Link: "",
  imageUrl: "",
  Date: "",
  Paragraph: ``
}
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
              <Link to="/singlepost/1">
                <img src="/src/assets/artwork/astronaut.jpg" alt="" />
              </Link>
              <h1>SUCCESFUL REPAIR OF THE MX-1 SAT</h1>
              <span>FEBRUARY 6, 2023</span>
              <p>
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text.
              </p>
              <Link to="/singlepost/1" className="more">
                Read More
              </Link>
            </li>
            <li>
              <Link to="/singlepost/1">
                <img src="/src/assets/artwork/satellite-dish.jpg" alt="" />
              </Link>
              <h1>ALIEN SIGNAL DISCOVERY</h1>
              <span>FEBRUARY 3, 2023</span>
              <p>
                You can remove any link to our website from this website
                template, you're free to use this website template without
                linking back to us.
              </p>
              <Link to="/singlepost/1" className="more">
                Read More
              </Link>
            </li>
          </ul>
        </div>
        <Sidebar/>
      </div>
    </div>
  </div>

</div>

    </>
  )
}

export default Blog