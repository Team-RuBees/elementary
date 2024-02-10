import React, { Component } from "react"
import '../assets/css/profilePage.css'; 
import NavBarLogin from '../components/NavBarLogin'; 
import Footer from '../components/Footer';
import Logo from '../assets/images/elementary-red-logo.png';
import ReactRoundedImage from "react-rounded-image"
import ProfileImage from '../assets/images/profile-image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie, isCookieExpired, removeCookie } from '../utils/cookies';

const ProfilePage = () => {

    const navigate = useNavigate();
    const user = getCookie("name");
    const handleLogout = () => {
        removeCookie("name");
        navigate("/login");
      };

    return (

        
        <div>
        <NavBarLogin />
    
            
          {<body>
    <div class="parent-container">
        <h1 class="title">
            {user}
        </h1>

        <div class="child-container-top">            
            <ReactRoundedImage
            image={ProfileImage}
            roundedColor="#d41a1a" 
            imageWidth="150"
            imageHeight="150"
            roundedSize="9"
            hoverColor="#4e5155"
            borderRadius="50%"
            />
        </div>

        <div class="child-container-middle">
     
        </div>

        
        <div class="child-container-bottom">

            <div class="form-group">
                <div class="form-group-sections">
                    <button type="button" class="btn-save btn-save-ss"  onClick={handleLogout}>Logout</button>
                </div>                
            </div>         
        </div>
    </div>


        
    </body>}
    
    <Footer/>
        </div>
    
        
      );
    };

export default ProfilePage;