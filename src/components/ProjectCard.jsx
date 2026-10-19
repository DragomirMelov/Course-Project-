import { Link } from "react-router"

export const ProjectCard = (props) => {
return (
    <>
              <li>
            <Link to={`/projects/${props.link}`}>
              <img src={props.imageUrl} alt="" />
            </Link>
            <div>
              <h1>{props.title}</h1>
              <p>
                {props.Paragraph}
              </p>
              <Link to={`/projects/${props.link}`} className="more">
                Read More
              </Link>
            </div>
          </li>
    </>
)
  
  
}
