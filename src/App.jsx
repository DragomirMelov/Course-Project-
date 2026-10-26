import Index from "./pages/Index";
import About from "./pages/About";

import { Routes , Route, useNavigate } from "react-router";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Article from "./components/Article";
import { useCallback, useMemo, useState } from "react";
import { UserContext } from "./Context/userContext";
import Api, { Auth } from "./utils/requester";
import CreateProject from "./pages/Projects/CreateProject";
import EditProject from "./pages/Projects/EditProject";
import RouteGuards from "./components/auth/RouteGuards";



function App() {
  const [auth, setAuth] = useState(null); 
    let navigate = useNavigate();






  const logout = useCallback(async () => {
    const token = auth?.access_token;
    try {
      const result = await Auth(token, "logout","POST");
      return result; 
    } catch (error) {
      alert(error);
      throw error;   
    }finally{
      setAuth(null)
      navigate("/");
    }
  }, [auth]);




  const editProject = useCallback(async (id,Obj) => {
    const token = auth?.access_token;
    try {
      const result = await Api(token, "projects", `?id=eq.${id}`, "PATCH",Obj);
      return result; 
    } catch (error) {
      alert(error);
      console.error(error);
      throw error;   
    }
  }, [auth]);

  const deleteProject = useCallback(async (id) => {
    const token = auth?.access_token;
    try {
      const result = await Api(token, "projects", `?id=eq.${id}`, "DELETE");
      navigate("/projects")
      return result; 
    } catch (error) {
      alert(error);
      console.error(error);
      throw error;   
    }
  }, [auth]);



  const createProject = useCallback(async (Obj) => {
    const token = auth?.access_token;
    try {
      const result = await Api(token, "projects", "", "POST", Obj);
      return result; 
    } catch (error) {
      alert(error);
      console.error(error);
      throw error;   
    }
  }, [auth]);


  const SignupHandler = useCallback(async (Obj) => {
    try {
      const result = await Auth("", "signup", "POST", Obj);
      setAuth(result);
      return result;
    } catch (error) {
      
      console.error(error);
      alert(error);
      throw error;
    }
  }, []);


  const LoginHandler = useCallback(async (Obj) => {
    try {
      const result = await Auth("", "token?grant_type=password", "POST", Obj);
      setAuth(result);
      return result;
    } catch (error) {
      console.error("Login failed:", error);
      alert(error)
      throw error; 
    }
  }, []);

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
      <Route path="*" element={<><h1>Not a Page</h1></>}/>
      <Route path="/" element={<Index/> }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/projects/:projectid" element={<Article/>}/>
      <Route element={<RouteGuards/>}>
      <Route path="/projects/edit/:projectid" element={<EditProject/>}/>
      <Route path="/create/project" element={<CreateProject/>}/>
      </Route>

    </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
