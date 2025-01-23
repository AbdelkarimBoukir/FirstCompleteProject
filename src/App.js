import { BrowserRouter as Router, Routes, Route,HashRouter } from 'react-router-dom';import './App.css';
import Home from './pages/Home';
import Navbar from './Components/NavBar';
import Complement from './pages/Complement';
import Login from './pages/Login';
import Details from './pages/Details';
import { ListComplement } from './pages/Complement';
import Coachs from "./pages/Coachs";



function App() {
  return (
  <div className='App' >
   <HashRouter >
     <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/complement" element={<Complement/>}/>
            <Route path="/details/:id" element={<Details ListComplement={ListComplement} />}/>
            <Route path="/contact" element={<Login/>}/>
            <Route path='/coach' element={<Coachs/>} />
       </Routes>
  </HashRouter>
  </div>
  
  );
}

export default App;
