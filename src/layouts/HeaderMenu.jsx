import { Link } from "react-router"

const HeaderMenu = () => {
    return (
<>
    <div id="header">
    <div>
        <Link to="/"  className="logo">
        <img src="/src/assets/artwork/logo.png" alt="" />
        </Link>
    <ul id="navigation">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li className="menu">
            <Link to="projects">Projects</Link>
        <ul className="primary">
            <li>
                <Link to="proj1">proj 1</Link>
            </li>
        </ul>
        </li>
        <li className="menu selected">
            <Link to="/blog">Blog</Link>
        <ul className="secondary">
            <li>
        <Link to="singlepost">Single post</Link>
            </li>
            </ul>
        </li>
        <li>
            <Link to="contact">Contact</Link>
        </li>
    </ul>
    </div>
    </div>
</>
    )
}

export default HeaderMenu