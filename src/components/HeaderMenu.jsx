import { Link, useLocation, useParams } from "react-router"

const HeaderMenu = () => {
            const  route  = useLocation()

    console.log(route.pathname )



    return (
<>
    <div id="header">
    <div>
        <Link to="/"  className="logo">
        <img src="/src/assets/artwork/logo.png" alt="" />
        </Link>
    <ul id="navigation">
            <li className={`${route.pathname === "/" ? 'menu selected': ''}`}>
            <Link to="/">Home</Link>
        </li>
        <li className={`${route.pathname === "/about" ? 'menu selected': ''}`} >
            <Link to="/about">About</Link>
        </li>
        <li className={`${route.pathname === "/projects" ? 'menu selected': ''}`} >
            <Link to="/projects">Projects</Link>
        </li>
        <li className={`${route.pathname === "/contact" ? 'menu selected': ''}`}>
            <Link to="/contact">Account</Link>
        </li>
    </ul>
    </div>
    </div>
</>
    )
}

export default HeaderMenu