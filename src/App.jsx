import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";

import { Routes , Route } from "react-router";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Singlepost from "./pages/Singlepost";
import Article from "./components/Article";
import { BlogPost } from "./components/BlogPost";


function App() {

  return (
    <>
    <Routes>
      <Route path="*" element={<><h1>Not Faund</h1></>}/>
      <Route path="/" element={<Index/> }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/projects/:projectid" element={<Article/>}/>
            <Route path="/blogs/:blogpostid" element={<BlogPost/>}/>
    </Routes>
    </>
  )
}

export default App
