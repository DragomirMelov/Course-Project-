import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";

import { Routes , Route } from "react-router";


function App() {

  return (
    <>
    <Routes>
      <Route path="*" element={<><h1>Not Faund</h1></>}/>
      <Route path="/" element={<Index/> }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
    </>
  )
}

export default App
