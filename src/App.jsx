import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";

import { Routes , Route, useNavigate } from "react-router";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Article from "./components/Article";
import { BlogPost } from "./components/BlogPost";
import { useCallback, useMemo, useState } from "react";
import { UserContext } from "./Context/userContext";
import Api, { Auth } from "./utils/requester";
import CreateProject from "./pages/Projects/CreateProject";
import EditProject from "./pages/Projects/EditProject";



function App() {
  const [auth, setAuth] = useState(null); 
    let navigate = useNavigate();



  const logout = useCallback(async () => {
    const token = auth?.access_token;
    try {
      const result = await Auth(token, "logout","POST");
      return result; 
    } catch (error) {
      console.error(error);
      throw error;   
    }finally{
      setAuth(null)
      navigate("/");
    }
  }, [auth]);




  const editProject = useCallback(async (gameid,Obj) => {
    const token = auth?.access_token;
    try {
      const result = await Api(token, "projects", `?id=eq.${gameid}`, "PATCH",Obj);
      return result; // 👈 Return result so the component knows it worked
    } catch (error) {
      console.error(error);
      throw error;   // 👈 Throw error so the component can catch it
    }
  }, [auth]);

  const deleteProject = useCallback(async (gameid) => {
    const token = auth?.access_token;
    try {
      const result = await Api(token, "projects", `?id=eq.${gameid}`, "DELETE");
      return result; // 👈 Return result so the component knows it worked
    } catch (error) {
      console.error(error);
      throw error;   // 👈 Throw error so the component can catch it
    }
  }, [auth]);


  // 1. Optimized with useCallback
  // Depends on [auth] because it reads auth?.access_token
  const createProject = useCallback(async (Obj) => {
    const token = auth?.access_token;
    try {
      const result = await Api(token, "projects", "", "POST", Obj);
      return result; // 👈 Return result so the component knows it worked
    } catch (error) {
      console.error(error);
      throw error;   // 👈 Throw error so the component can catch it
    }
  }, [auth]);

  // 2. Optimized with useCallback
  // Empty array [] because setAuth and Auth are stable
  const SignupHandler = useCallback(async (Obj) => {
    try {
      const result = await Auth("", "signup", "POST", Obj);
      setAuth(result);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  // 3. Optimized with useCallback + added try/catch!
  const LoginHandler = useCallback(async (Obj) => {
    try {
      const result = await Auth("", "token?grant_type=password", "POST", Obj);
      setAuth(result);
      return result;
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Important: lets the Login component show "Wrong password"
    }
  }, []);

  // 4. Memoize the object passed to the Provider
  const contextValue = useMemo(() => ({
    auth,
    setAuth,
    SignupHandler,
    LoginHandler,
    createProject,
    deleteProject ,
    editProject,
    logout
  }), [auth, SignupHandler, LoginHandler, createProject,deleteProject,editProject,logout]);
  return (
    <>
    <UserContext.Provider value={contextValue}>
    <Routes>
      <Route path="*" element={<><h1>Not Faund</h1></>}/>
      <Route path="/" element={<Index/> }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/projects/:projectid" element={<Article/>}/>
      <Route path="/projects/edit/:projectid" element={<EditProject/>}/>
      <Route path="/create/project" element={<CreateProject/>}/>
      <Route path="/blogs/:blogpostid" element={<BlogPost/>}/>
    </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
