import React, { useEffect, useState } from 'react'
import HeaderMenu from './HeaderMenu';
import Api from '../utils/requester';
import { useParams } from 'react-router';

export const BlogPost = () => {
const {blogpostid} = useParams();
  const [blog,setBlog] = useState();
  
useEffect(()=>{
        const fetchData = () =>{
        Api(null, "blogs",`?id=eq.${blogpostid}`).then(data => setBlog(...data));
        }
    fetchData()
},[])



if (blog === undefined) return <p>Loading…</p>

return(
  <>
  <HeaderMenu/>
<div id="page">
  <div id="body">
    <div className="header">
      <div>
        <h1>{blog.title}</h1>
        <img src={blog.image} alt="" />
          <span>{blog.Date}</span>
        <p>
            {blog.body}
          </p>          
      </div>
    </div>
  </div>
</div>
</>
)
    }
