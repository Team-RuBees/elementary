import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<SignUp/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
