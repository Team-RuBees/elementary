import React from 'react';
import '../assets/css/customizePage.css'; 
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer';
import '../components/CustomSideBar.css'; // Import your CSS file



const CustomizePage = () => {
  return (
    
    <div>
        <NavBar/>
        
    
    <div className="content">
        <div class="CustomSidebar">
        <ul>
            <li><a href="customize">button</a></li>
            <li><a href="customize">toggle</a></li>
            <li><a href="customize">radio button</a></li>
            <li><a href="customize">input box</a></li>
            <li><a href="customize">cards</a></li>
            <li><a href="customize">footer</a></li>
            <li><a href="customize">navbar</a></li>
            <li><a href="customize">sidebar</a></li>
            <li><a href="customize">table</a></li>
            <li><a href="customize">loader</a></li>
            <li><a href="customize">form</a></li>
        </ul>
    </div>
        


        <div className="page_generator">
            <div className="preview_container">
                <button className="btnPreview">button</button>
            </div>
            <div className="adjust">
                <ul class="checkboxes">
                    <li><label><input type="checkbox" name="dropShadow"/> drop shadow</label></li>
                    <li><label><input type="checkbox" name="stroke"/> stroke</label></li>
                    <li><label><input type="checkbox" name="image"/> image</label></li>
                    <li><label><input type="checkbox" name="label"/> label</label></li>
                </ul>
                    
                <div class="sliders">
                    <label for="textSizeSlider">text size</label> <br/>
                    <input type="range" id="textSizeSlider" min="0" max="100" value="50"/>
                        
                    <label for="borderRadiusSlider">border radius</label> <br/>
                    <input type="range" id="borderRadiusSlider" min="0" max="100" value="50"/>

                    <label for="sizeSlider">color</label> <br/>
                    <input type="range" id="sizeSlider" min="0" max="100" value="50"/>

                    <label for="colorSlider">color</label> <br/>
                    <input type="range" id="colorSlider" min="0" max="360" step="1" value="0"/>
                </div>
            </div>
            <div class="generatedCode-container">
                <p/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt leo nisl, et varius 
                <br/> <span id="pinkCode">justo tincidunt eget. Pellentesque at sodales orci. Suspendisse ut risus ut dolor maximus</span>
                <br/> <span id="blueCode">consectetur in a massa. Integer ultricies cursus ex et pellentesque. Aliquam tellus risus,</span>
                 <span id="yellowCode">hendrerit eu ex vel, semper sollicitudin metus.</span>
            </div>
        </div>
    </div>











    

    <Footer/>
    </div>

    
  );
};

export default CustomizePage;