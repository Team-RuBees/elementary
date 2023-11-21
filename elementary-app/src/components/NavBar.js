import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/NavBar.css'; // Import your CSS file
import Logo from '../assets/images/elementary-red-logo.png';


const NavBar = () => {
    return (
      <div>
       
    <header>
        <nav>
            <div id="NavBar">
                <ul>
                    <img src={Logo} alt="Logo" className="Logo"/>
                    <li><Link to="/home" class="home">home</Link></li>
                    <li><Link to="/home" class="home">generate</Link></li>
                    <li><Link to="/home" class="home">support</Link></li>
                    <li><Link to="/home" class="home">about</Link></li>
                    <li class="right-links">
                        <Link to="/signup">sign up</Link>
                        <Link to="/login" class="signin-button">sign in</Link>
                    </li>
                </ul>
                
            </div>
        </nav>        
    </header>
    


       
      </div>
      
    );
  };
  
  export default NavBar;