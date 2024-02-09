import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/NavBarLogin.css'; // Import your CSS file
import Logo from '../assets/images/elementary-red-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBarLogin = () => {
    return (
      <div>
       
        <header id="NavBar">
            <nav>
                <img src={Logo} alt="Logo" className="Logo"/>

                    <h4 class="none" for="toggler">
                        <FontAwesomeIcon icon={faBars} />
                    </h4>
                <input type="checkbox" id="toggler" name=""/>
                
                <div class="menu">
                    <ul class="list">
                        <li><Link to="/home" class="btn">home</Link></li>
                        <li><Link to="/home" class="btn">generate</Link></li>
                        <li><Link to="/home" class="btn">support</Link></li>
                        <li><Link to="/about" class="btn">about</Link></li>
                        <li><Link to="/settings" class="btn">settings</Link></li>
                    </ul>
                </div>
            </nav>        
        </header>
    
      </div>
      
    );
  };
  
  export default NavBarLogin;


