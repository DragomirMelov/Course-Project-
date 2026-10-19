import { useParams , useSearchParams,useLocation, Link } from "react-router"
import { Navigate } from "react-router"
import HeaderMenu from "../components/HeaderMenu"
import Sidebar from "../components/Sidebar"
import { BlogCard } from "../components/BlogCard"
import { useEffect, useState } from "react"
import Api from "../utils/requester"

const Blog = () => {
  const [blogs,setBlogs] = useState([]);
    useEffect(() => {
      const fetchData = () =>{
    Api(null, "blogs","?order=created_at.desc").then(data => setBlogs(data)).catch(err => console.error("blogs fetch failed:", err));;
    }
      fetchData()
    },[])

  return (
    <>
    <div id="page">
    <HeaderMenu/>
  <div id="body">
    <div className="header">
      <div>
        <h1>Blog</h1>
        <div className="article">
          <ul>
            {blogs.map(Blog => <BlogCard key={Blog.id} title={Blog.title} date={Blog.Date} imageUrl={Blog.image} Paragraph={Blog.Paragraph} link={Blog.id} />)}
           {/* <BlogCard title={Card.title} date={Card.Date} imageUrl={Card.imageUrl} Paragraph={Card.Paragraph} link={Card.Link}/> */}
            {/*<BlogCard title={Card2.title} date={Card2.Date} imageUrl={Card2.imageUrl} Paragraph={Card2.Paragraph} link={Card2.Link}/> */}
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