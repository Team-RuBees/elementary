import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/NavBar.css'; // Import your CSS file
import Logo from '../assets/images/elementary-red-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
      <div>
       
        <header id="NavBar">
            <nav>
                <img src={Logo} alt="Logo" className="Logo"/>

                    <label for="toggler">
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                <input type="checkbox" id="toggler" name=""/>
                
                <div class="menu">
                    <ul class="list">
                        <li><Link to="/home" class="btn">home</Link></li>
                        <li><Link to="/button" class="btn">generate</Link></li>
                        <li><Link to="/help" class="btn">support</Link></li>
                        <li><Link to="/about" class="btn">about</Link></li>
                        
                        <li><Link to="/signup" class="signup">sign up</Link></li>
                        <li><Link to="/login" class="login">sign in</Link></li>
                    </ul>
                </div>
            </nav>        
        </header>
    
      </div>
      
    );
  };
  
  export default NavBar;


