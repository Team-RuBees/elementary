import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Navigate } from 'react-router-dom';
import CustomizePage from './pages/CustomizePage'
import CustomSideBar from './components/CustomSideBar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/customize" element = {<CustomizePage/>}/>
          <Route path="/customsidebar" element = {<CustomSideBar/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
