import React from 'react';
import '../assets/css/customizePage.css'; 
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer';
import '../components/CustomSideBar.css'; // Import your CSS file
import { useState, useEffect } from 'react';



const CustomizePage = () => {
    const [buttonColor, setButtonColor] = useState('#808080'); // gray
    const [textColor, setTextColor] = useState('#ffffff'); // white text
    const [generatedHtml, setGeneratedHtml] = useState('');
    const [isDropShadowChecked, setDropShadowChecked] = useState(false);
    const [isStrokeChecked, setStrokeChecked] = useState(false); 
    const [textSize, setTextSize] = useState(16);
    const [borderRadius, setBorderRadius] = useState(50); // Default border radius
  
  
    useEffect(() => {
        // Update the generated HTML
        const boxShadowStyle = isDropShadowChecked ? 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);' : '';
        const borderStyle = isStrokeChecked ? '2px solid black' : 'none';
        const htmlCode = `<button style="color: ${textColor}; background: ${buttonColor}; border: 0 solid; border-radius: ${borderRadius}px; font-size: ${textSize}px; ${boxShadowStyle} ${borderStyle}">button</button>`;
        setGeneratedHtml(htmlCode);
    }, [buttonColor, textColor, isDropShadowChecked, isStrokeChecked, textSize, borderRadius]);
    const handleButtonColorChange = (event) => {
      // Update button color
      setButtonColor(event.target.value);
    };
  
    const handleTextColorChange = (event) => {
      // Update text color
      setTextColor(event.target.value);
    };
    //checkboxes status
    const handleCheckboxChange = (checkboxName) => {
        switch (checkboxName) {
          case 'dropShadow':
            setDropShadowChecked(!isDropShadowChecked);
            break;
          case 'stroke':
            setStrokeChecked(!isStrokeChecked);
            break;
          // Add more cases for other checkboxes if needed
          default:
            break;
        }
      };
      //border radius
      const handleBorderRadiusChange = (event) => {
        // Update border radius
        setBorderRadius(event.target.value);
      };

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
                <button className="btnPreview" 
                   style={{
                    color: textColor,
                    background: buttonColor,
                    border: `0 solid`,
                    borderRadius: `${borderRadius}px`,
                    fontSize: `${textSize}px`,
                    boxShadow: isDropShadowChecked ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                    border: isStrokeChecked ? '2px solid black' : 'none',
                    }}
                >button</button>
            </div>
            <div className="adjust">
                <ul class="checkboxes">
                    <li><label><input  type="checkbox"
                    checked={isDropShadowChecked}
                    onChange={() => handleCheckboxChange('dropShadow')}
                    name="dropShadow"/> drop shadow</label></li>
                    <li><label><input type="checkbox" checked={isStrokeChecked}
                    onChange={() => handleCheckboxChange('stroke')} name="stroke"/> stroke</label></li>
                    <li><label><input type="checkbox" name="image"/> image</label></li>
                    <li><label><input type="checkbox" name="label"/> label</label></li>
                </ul>
                    
                <div class="sliders">
                    <label for="textSizeSlider">text size</label> <br/>
                    <input type="range" id="textSizeSlider" min="8"
                    max="50" value={textSize}  onChange={(e) => setTextSize(e.target.value)}
                    />
                        
                    <label for="borderRadiusSlider">border radius</label> <br/>
                    <input type="range" id="borderRadiusSlider" min="0"
                    max="100"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(e.target.value)}/>

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

export default CustomizePage;