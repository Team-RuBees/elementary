import React from 'react';
import '../../assets/css/customizePage.css'; 
import NavBar from '../../components/NavBar'; 
import Footer from '../../components/Footer';
import CustomSideBar from '../../components/CustomSideBar';
import '../../components/CustomSideBar.css';
import { useState, useEffect, useRef } from 'react';
import uploadIcon from '../../assets/images/upload-icon.png';




const CheckBox = () => {
    const [checkboxColor, setCheckboxColor] = useState("#808080"); // Define state for button color
    const [textColor, setTextColor] = useState("#ffffff"); // Define state for text color
    const [generatedHtml, setGeneratedHtml] = useState(""); // Define state for generated HTML
    const checkboxRef = useRef(null); // Create a reference for the button element
    const [isRemoveIconChecked, setRemoveIconChecked] = useState(false); // Define state for drop shadow checkbox
    const [isStrokeChecked, setStrokeChecked] = useState(""); // Define state for stroke checkbox
    const [borderRadius, setBorderRadius] = useState(20); // Define state for border radius
    const [checkboxSize, setCheckboxSize] = useState(50); // Default checkbox size
    const [isDropShadowChecked, setDropShadowChecked] = useState(false);
    const [dropShadowValue, setDropShadowValue] = useState(0);
    const [checkboxLabel, setCheckboxLabel] = useState('');
    const [showInput, setShowInput] = useState(''); // State for input text box visibility
    
  
    // Update the generated HTML whenever relevant states change
    useEffect(() => {
      const borderStyle = isStrokeChecked ? "2px solid black" : "none";
      const htmlCode = `<input type="checkbox" style=" background: ${checkboxColor};  height: ${checkboxSize}px; width: ${checkboxSize}px;"></input>`;
      setGeneratedHtml(htmlCode);
    }, [
      checkboxColor,
      textColor,
      isRemoveIconChecked,
      isStrokeChecked,
      borderRadius,
      checkboxSize,
      dropShadowValue,
    ]);
  
  

  const copyCodeToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = generatedHtml;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
    const handleCheckboxColorChange = (event) => {
      // Update checkbox color
      setCheckboxColor(event.target.value);
    };
  
    const handleTextColorChange = (event) => {
      // Update text color
      setTextColor(event.target.value);
    };
  
    const handleCheckboxSizeChange = (event) => {
      // Update checkbox size
      setCheckboxSize(parseInt(event.target.value));
    };
  
    // Handle checkbox status changes
    const handleCheckboxChange = (checkboxName, index) => {
      switch (checkboxName) {
        case "dropShadow":
          setDropShadowChecked(!isDropShadowChecked);
          break;
        case "stroke":
          setStrokeChecked(!isStrokeChecked);
          break;
        case "removeIcon":
          setRemoveIconChecked(!isRemoveIconChecked);
          break;
        default:
          break;
      }
      if (checkboxName === "label") {
        setShowInput(!showInput);
      }
  
     
    };
  
    // Handle border radius change
  
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
            <label>
                <input
                type="checkbox"
                className="checkboxPrev"
                ref={checkboxRef}
                onChange={handleCheckboxChange}
                style={{ accentColor: checkboxColor, borderRadius: `${borderRadius}px`, height: `${checkboxSize}px`, width: `${checkboxSize}px` }}
                size={checkboxSize}
                defaultChecked
                />
                {isStrokeChecked && (
          <span style={{
                display: "inline-flex",
                alignItems: "center",
                marginLeft: "10px",
                justifyContent: "center",

                height: `${checkboxSize}px`,
                lineHeight: `normal`
                }}>
                <p style={{ whiteSpace: "nowrap" }}>
                    {checkboxLabel}
                </p>
                </span>
 )}
                            
            </label>
            </div>
            <div className="adjust">
                <ul className="checkboxes">
                    <li><label><input  type="checkbox" checked={isDropShadowChecked} onChange={() => handleCheckboxChange('dropShadow')} name="dropShadow"/> drop shadow</label></li>
                    <li><label><input type="checkbox" checked={isStrokeChecked} onChange={() => handleCheckboxChange('stroke')} name="stroke"/> label</label></li>                    
                
                    <li><label> </label></li>
                    {isStrokeChecked && (
                <>
                    <input
                    type="text"
                    value={checkboxLabel}
                    onChange={(e) => setCheckboxLabel(e.target.value)}
                    style={{ marginLeft: '10px', marginTop: '15px' }}
                    />
                    
                </>
                )}
                </ul>
                    
                <div class="sliders">
                    <label for="checkboxSlider">checkbox size</label>
                    <input type="range" id="textSizeSlider" min="12" max="100" value={checkboxSize}   
                    onChange={(e) => setCheckboxSize(e.target.value)}
                    />
                    <br/>

                    
                    <label for="colorSlider">color</label> 
                    <input
                        type="color"
                        id="btnColorPicker"
                        value={checkboxColor} // Use the dynamic buttonColor state
                        onChange={handleCheckboxColorChange} // Update the buttonColor state on change
                    />  
                    <br/>              
                </div>
            </div>
            <div className="generatedCode-container">
                        <div className="copyCodeRectangle">
                            <button className="copyCodeButton" onClick={copyCodeToClipboard}>Copy Code</button>
                        </div>
                        <div className='generated-space'>
                        <p>{generatedHtml}</p>
                        </div>
            </div>
            </div>
            </div>
    <Footer/>
    </div>

    );
};

export default CheckBox;