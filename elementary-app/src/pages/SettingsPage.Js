import React, { Component } from "react"
import '../assets/css/settingsPage.css'; 
import NavBarLogin from '../components/NavBarLogin'; 
import Footer from '../components/Footer';
import Logo from '../assets/images/elementary-red-logo.png';
import ReactRoundedImage from "react-rounded-image"
import ProfileImage from '../assets/images/profile-image.jpg';

const SettingsPage = () => {
    return (
        <div>
        <NavBarLogin />
    
            
          {<body>
    <div class="parent-container">
        <h1 class="title">
            Profile
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
            <div class="form-group">


                <div class="form-group-sections">
                    <span for="address">Username</span>
                    <input type="text" class="field" name="username" id="address" required="" fdprocessedid=""/>
                </div>
                
                <div class="form-group-sections">
                <span for="address">Name</span>
                <input type="text" name="name" id="address" required="" fdprocessedid=""/>
                </div>

                <div class="form-group-sections">
                <span for="address">Email</span>
                <input type="text" name="email" id="address" required="" fdprocessedid=""/>
                </div>
            </div>
        </div>

        
        <div class="child-container-bottom">

            <div class="form-group">
                <div class="form-group-sections">
                    <button type="button" class="btn-save btn-save-ss">Edit</button>
                </div>
                <div class="form-group-sections">
                    <button type="button" class="btn-logout">Logout</button>
                </div>
            </div>

            
            
        </div>
    </div>


        
    </body>}
    
    <Footer/>
        </div>
    
        
      );
    };

export default SettingsPage;