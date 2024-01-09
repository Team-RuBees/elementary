import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';  // Update the path based on your project structure
import Footer from '../../components/Footer';  // Update the path based on your project structure
import CustomSideBar from '../../components/CustomSideBar';  // Update the path based on your project structure
import '../../components/CustomSideBar.css';  // Update the path based on your project structure
import uploadIcon from '../../assets/images/upload-icon.png';  // Update the path based on your project structure





const ButtonPage = () => {

    const [buttonColor, setButtonColor] = useState('#808080'); //gray
    const [textColor, setTextColor] = useState('#ffffff'); // white text
    const [generatedHtml, setGeneratedHtml] = useState('');

    useEffect(() => {
        // Update the generated HTML 
        const htmlCode = `<button style="color: ${textColor}; background: ${buttonColor}; border: 0 solid; border-radius: 40px; font-size: 1rem;">button</button>`;
        setGeneratedHtml(htmlCode);
      }, [buttonColor, textColor]);

    const handleButtonColorChange = (event) => {
      // Update button color
      setButtonColor(event.target.value);
    };

    const handleTextColorChange = (event) => {
        // Update text color
        setTextColor(event.target.value);
      };

  return (
    
    <div>
        <NavBar/>


        
    
    <div className="content">   

        <div class="CustomSideBar">
        <ul>
            <li><a href="customize">BUTTON</a></li>
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
                
                <button className="btnPreview" 
                    style=
                    {{
                        color: textColor,
                        background: buttonColor,
                        border: '0 ' + 'solid',
                        borderRadius: 40,
                        fontSize: 1 + 'rem'
                    }}
                >button</button>
            </div>
            <div className="adjust">
                <ul className="checkboxes">
                    <li><label><input type="checkbox" name="dropShadow"/> drop shadow</label></li>
                    <li><label><input type="checkbox" name="stroke"/> stroke</label></li>
                    <li>
                <label>
                    <input type="checkbox" name="image"/> image
                </label>
                <button className="uploadImageButton">
                    UPLOAD <img src={uploadIcon} alt="Icon Placeholder" className="iconPlaceholder" />
                </button>
        </li>
                    <li><label><input type="checkbox" name="label"/> label</label></li>
                </ul>
                    
                <div class="sliders">
                    <label for="textSizeSlider">text size</label> <br/>
                    <input type="range" id="textSizeSlider" min="0" max="100" value="50"/>
                        
                    <label for="borderRadiusSlider">border radius</label> <br/>
                    <input type="range" id="borderRadiusSlider" min="0" max="100" value="50"/>

                    <label>text color</label> <br/>
                    <input
                        type="color"
                        id="txtColorPicker"
                        value={textColor} // change textColor state
                        onChange={handleTextColorChange} // Update the buttonColor state on change
                    /> 

                    <label for="colorSlider">color</label> <br/>
                    <input
                        type="color"
                        id="btnColorPicker"
                        value={buttonColor} // Use the dynamic buttonColor state
                        onChange={handleButtonColorChange} // Update the buttonColor state on change
                    />                
                </div>
            </div>
            <div class="generatedCode-container">
                <p>{generatedHtml}</p>
            </div>
        </div>
    </div>











    

    <Footer/>
    </div>

    
  );
};

export default ButtonPage;