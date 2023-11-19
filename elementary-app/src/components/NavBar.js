import React from 'react';
import '../components/NavBar.css'; // Import your CSS file
import Logo from '../assets/images/elementary-red-logo.png';
import { Link } from 'react-router-dom';
import SignUp from '../pages/SignUp';


const NavBar = () => {
    return (
      <div>
       
    <header>
        <nav>
            <div id="NavBar">
                <ul>
                    <img src={Logo} alt="Logo" className="Logo"/>
                    <li><a id="home-navbar" href="../pages/home-page.html">home</a></li>
                    <li><a id="generate-navbar" href="../pages/custom_button_page.html">generate</a></li>
                    <li><a id="support-navbar" href="../pages/home-page.html">support</a></li>
                    <li><a id="about-navbar" href="../pages/home-page.html">about</a></li>
                    <li class="right-links">
                        <Link to="/SignUp.js">sign up</Link>
                        <a href="../pages/login.html" class="signin-button">sign in</a>
                    </li>
                </ul>
                
            </div>
        </nav>        
    </header>


       
      </div>
    );
  };
  
  export default NavBar;