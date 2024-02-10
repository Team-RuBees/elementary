import React, { useEffect } from 'react';
import '../assets/css/homePage.css'; 
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/elementary-red-logo.png';
import selectElementImage from '../assets/images/select-element.png';
import adjustElementImage from '../assets/images/adjust-element.png';
import pasteElementImage from '../assets/images/paste-element.png';
import enjoyElementImage from '../assets/images/enjoy.png';
import { useLocation } from "react-router-dom";



const HomePage = () => {
    const location = useLocation();
    const state = location.state;

    useEffect(() => {
        const element1 = document.querySelector('.element1');
        if (element1) {
          element1.addEventListener('click', () => {
            window.location.href = '/button'; // Replace '/button' with the URL of the page you want to navigate to
          });
        }
      }, []);
  return (
    <div>
        <NavBar user={state}/>

        
      {<body>
{/* <!-------------------------1/3 SECTION start-------------------------> */}
<div class="openingText-container">
    <div class="rectangle-container">
        <div class="elements-inside-shape">
            <div class="text-column1">
                <p>ui made  <b>simple</b></p>
            </div>
            <div class="text-column2">
                <p id="typewriter-text"> Create stunning interfaces with just a few slides, drag, and ticks. Say goodbye to coding complexities and embrace simplicity at its best. With our library of pre-built UI elements, easily generate CSS code, customize with ease, and watch your design plus vision come alive instantly.


<span class="cursor">|</span></p>
            </div>
            <div class="button-column">
                <p>get started <b>&darr;</b></p>
            </div>
        </div>
    </div>
</div>

{/* <!-------------------------1/3 SECTION end-------------------------> */}


{/* <!------------------------- 2/3 SECTION start-------------------------> */}

{/* <!-- 
    elements
    what are we making?
--> */}
<div>
<div class="what-text">
        <div class="elements-inner-text1">elements</div>
        <div class="elements-inner-text2">what are we making?</div>
</div>

</div>

<div class="firstContainer-elements-grid">

    <Link to="/button" >
    <div class="element-container">
        <div class="element-boxHolder">
            <div class="box-content">
                <div class="insides">
                    <div class="element1">
                        <div className="textsInElement">button
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="shape-label">button</p>
    </div>
    </Link>
    
    <Link to="/toggle" >
    <div class="element-container">
        <div class="element-boxHolder">
            <div class="box-content">
            <div class="insides">
                    <div className="element2">
                
                        <div className="textsInElement">on
                        
                        </div>
                        <div className="offdesign">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="shape-label">toggle</p>
    </div>
    </Link>

    <Link to="/checkbox" >
    <div class="element-container">
        <div class="element-boxHolder">
            <div class="box-content">
                <div className="element3">
                    <div className="circle1">
                        <div className="insides">
                        <div className="smallercircle1">  
                            </div>
                       </div>
                    </div>
                    <div className="circle2">
                    <div className="insides">
                        <div className="smallercircle1">   
                        <div className="insides">
                                <div className='innercircle'></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="shape-label">radio/checkbox</p>
    </div>
    </Link>
    
    <Link to="/inputbox" >
    <div class="element-container">
        <div class="element-boxHolder">
            <div class="box-content"></div>
            <div class="insides">
                        <div className="element4">

                    </div>
                    </div>

        </div>
        <p class="shape-label">input box</p>
    </div>
    </Link>
    



    <div class="secondContainer-elements-grid">
   
    
        
        <Link to="/cards" >
        <div class="element-container">
            <div class="element-boxHolder">
                <div class="box-content">
                <div class="insides">
                    <div class="element7">
                    <div className="textInSidebar">home</div>

                    </div>
                </div>
                </div>
            </div>
            <p class="shape-label">cards</p>
        </div>
        </Link>

        <Link to="/table" >
        <div class="element-container">
            <div class="element-boxHolder">
                <div class="box-content">
                <div class="insides">
                    <div class="element8">
                    <div class="element8A"/>


                    </div>
                </div>
                </div>
            </div>
            <p class="shape-label">table</p>
        </div>
        </Link>
    </div>
</div>





{/* <!------------------------- 2/3 SECTION end-------------------------> */}

{/* <!------------------------- 3/3 SECTION start-------------------------> 
<div class="themes-section">
    <div class="text-themes">
        <p class="elements-inner-text1">themes</p>
        <p class="elements-inner-text2">how do you want your design?</p>
    </div>
    {/* <!-- BOX BOX BOX BOX--> 
    <div class="four-themes-skeleton">
        <div class="theme1">
            <div class="label-strip"></div>
        </div>
        <div class="theme1">
            <div class="label-strip"></div>
        </div>
        <div class="theme1">
            <div class="label-strip"></div>
        </div>
        <div class="theme1">
            <div class="label-strip"></div>
        </div>
    </div>
    
    


</div> */}
<div className="fourthsection">
    <div className="walkthrough-container">
        <div className="logo-sec">
            <div className='image-sec'>
                <img src={Logo} alt="Logo" className="Logoo"/>
                <div className='walkthrough-text'>walkthrough</div>
            </div>
        </div>
        <div className="steps-sec">
            <div className="all-steps">
                <div className="number-circle">1</div>
                <img src={selectElementImage} alt="Select Element" className="select-element-image" />
                <div className="title-sec">Select an element</div>
                <div className='desc'>Start by choosing from our collection of elements like buttons, text boxes, and images. Find the one that fits your needs.</div>

            </div>
            <div className="all-steps">
                <div className="number-circle">2</div>
                <img src={adjustElementImage} alt="Select Element" className="select-element-image" />
                <div className="title-sec">Modify it</div>
                <div className='desc'>Change up the look and feel with ease! Drag, tick, & click to adjust colors, sizes, and more – no coding required.</div>


            </div>

            <div className="all-steps">
                <div className="number-circle">3</div>
                <img src={pasteElementImage} alt="Select Element" className="select-element-image" />
                <div className="title-sec">Copy the code</div>
                <div className='desc'>See how your changes take shape in the live preview. When you're happy, simply copy the code.</div>

                

            </div>

            <div className="all-steps">
                <div className="number-circle">4</div>
                <img src={enjoyElementImage} alt="Select Element" className="select-element-image" />
                <div className="title-sec">Paste it!</div>
                <div className='desc'>Paste the code into your existing project and repeat! Keep adding elements to create your stunning UI in no time.</div>


            </div>
        </div>
    </div>
</div>










</body>}

<Footer/>
    </div>

    
  );
};

export default HomePage;