import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserPermission from "./pages/UserPermission";
import Layout from "./Components/Layout";
import Chat from "./pages/Chat"


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/permission" element={ <Layout>
          <UserPermission/>
        </Layout>
      } />
       <Route  path="/chat" element={<Chat/>}/>
      </Routes>
    
  );
}

export default App;
