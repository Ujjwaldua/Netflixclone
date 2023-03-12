import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import {Routes,Route,} from "react-router-dom";
import Addmovie from "./Components/Addmovie";
import Searchbox from './Components/Searchbox';
import Movies from './Components/Movies';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoutes from './Components/Check';
import Content from './Components/Content'
function App() {
  return (
   <>
   <Nav></Nav>
   <Routes>
         {/* <Route path="/" element={<Login />}  /> */}
         {/* <Route element={PrivateRoutes}> */}
            <Route path="/Home" element={<PrivateRoutes><Home /></PrivateRoutes>}  />
            <Route path="/Addmovie" element={<PrivateRoutes><Addmovie /></PrivateRoutes>} />
            <Route path="/Search" element={<PrivateRoutes><Searchbox /></PrivateRoutes>} />
            <Route path="/Movie" element={<PrivateRoutes><Movies /></PrivateRoutes>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Movie/:movieName" element={<Content />} />

         {/* </Route> */}
   </Routes>
 
 
  
   </>
  );
}

export default App;
