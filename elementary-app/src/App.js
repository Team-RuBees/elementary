import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import HelpPage from './pages/HelpPage';
import AboutPage from './pages/AboutPage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/help" element = {<HelpPage/>}/>
          <Route path="/about" element = {<AboutPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
