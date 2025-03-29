import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserPermission from "./pages/UserPermission";
import Layout from "./Components/Layout";
import Chat from "./pages/Chat"
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/permission" element={ <Layout>
          <UserPermission/>
        </Layout>
      } />
       <Route  path="/chat" element={<Layout><Chat/></Layout>}/>
       <Route path="/home" element={<Home/>}/>
      </Routes>
    
  );
}

export default App;
