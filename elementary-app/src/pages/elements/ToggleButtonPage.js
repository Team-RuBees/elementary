import React from 'react';
import '../../assets/css/customizePage.css'; 
import NavBar from '../../components/NavBar'; 
import Footer from '../../components/Footer';
import CustomSideBar from '../../components/CustomSideBar';
import '../../components/CustomSideBar.css';
import { useState, useEffect, useRef } from 'react';
import uploadIcon from '../../assets/images/upload-icon.png';




const TogglePage = () => {
    const [buttonColor, setButtonColor] = useState('lime'); // gray
    const [textColor, setTextColor] = useState('#808080'); // white text
    const [generatedHtml, setGeneratedHtml] = useState('');
    const toggleRef = useRef();
    const [isDropShadowChecked, setDropShadowChecked] = useState(false);
    const [isStrokeChecked, setStrokeChecked] = useState(false); 
    const [textSize, setTextSize] = useState(16);
    const [borderRadius, setBorderRadius] = useState(50); // Default border radius

    //toggle code
    const [isChecked, setIsChecked] = useState(false);
    const toggleSwitch = () => {
        setIsChecked(!isChecked);
    };
    const toggleTransform = isChecked ? { transform: 'translateX(40px)' } : {};


    useEffect(() => {
        // Update the generated HTML
        const boxShadowStyle = isDropShadowChecked ? 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);' : '';
        const borderStyle = isStrokeChecked ? '2px solid black' : 'none';
        const htmlCode = `
        <label style="position: relative; display: inline-block; margin:8px; width: 100px; height: 48px; backgroundColor; ${buttonColor} : #ccc; borderRadius:32px">
            <input type="checkbox" style="opacity: 0; width: 0; height: 0"/>
        
            <span style="position: absolute; cursor: pointer; padding: 8px ; margin: 4px; transition: .4s; 
                color: ${textColor};
                fontSize: ${textSize}px;
                backgroundColor: #fff;
                borderRadius: ${borderRadius}px;"
            </span>
        
        </label>`;
        setGeneratedHtml(htmlCode);
        const element = toggleRef.current;
        const cssObj = window.getComputedStyle(element);
    
        // Specify the style properties you are interested in
        const propertiesOfInterest = ['color', 'background', 'borderRadius', 'font'];
    
        // Create an array of objects with specified properties and their values
        const objStyle = propertiesOfInterest.map((property) => ({
        property,
        value: cssObj.getPropertyValue(property),
        }));
    
        console.log(objStyle);

    }, [buttonColor, textColor, isDropShadowChecked, isStrokeChecked, textSize, borderRadius, isChecked]);
    
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
    
    //image upload
    const inputRef = useRef(null);
    
    const handleImageUpload = () => {
        // Trigger the file input
        inputRef.current.click();
    };
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const backgroundImageUrl = event.target.result;
            const otherButton = document.getElementById('btnPreview');
    
            // Log the retrieved button element
            console.log(otherButton);
    
            // Check if the element is found before attempting to set its background
            if (otherButton) {
            otherButton.style.backgroundImage = `url(${backgroundImageUrl})`;
            } else {
            console.error('Button with ID "btnPreview" not found.');
            }
        };
        reader.readAsDataURL(file);
        }
};
    
return (
    
    <div>
        <NavBar/>


        
    
    <div className="content">   

        <div class="CustomSideBar">
        <ul>
        <li><a href="button">button</a></li>
            <li><a href="toggle">toggle</a></li>
            <li><a href="inputbox">input box</a></li>
            <li><a href="cards">cards</a></li>
            <li><a href="checkbox">checkbox</a></li>
            <li><a href="table">table</a></li>
            
        </ul>
    </div>
    

        <div className="page_generator">

            
            <div className="preview_container">
                
            <div>
                <label style={{ position: 'relative', display: 'inline-block', margin:'8px', width: '100px', height: '48px', backgroundColor: isChecked ? buttonColor : '#ccc', borderRadius:'32px' }}>
                    <input ref={toggleRef} type="checkbox" checked={isChecked} onChange={toggleSwitch} style={{ opacity: 0, width: 0, height: 0 }} />
                    
                    <span style={{ ...toggleTransform, position: 'absolute', cursor: 'pointer',padding: '8px ', margin: '4px', transition: '.4s', 
                        color: textColor,
                        fontSize: `${textSize}px`,
                        backgroundColor: '#fff',
                        borderRadius: `${borderRadius}px` }}
                        >{isChecked ? 'ON ' : 'OFF'}
                    </span>
                    
                </label>
            </div>

            </div>
            <div className="adjust">
                    
                <div class="sliders">
                    <label for="textSizeSlider">text size</label> <br/>
                    <input type="range" id="textSizeSlider" min="4"
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

export default TogglePage;