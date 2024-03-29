  import React from 'react';
  import '../../assets/css/customizePage.css'; 
  import NavBar from '../../components/NavBar'; 
  import Footer from '../../components/Footer';
  import CustomSideBar from '../../components/CustomSideBar';
  import '../../components/CustomSideBar.css';
  import { useState, useEffect, useRef } from 'react';




  const ButtonPage = () => {
      const [buttonColor, setButtonColor] = useState('#808080'); // gray
      const [textColor, setTextColor] = useState('#ffffff'); // white text
      const [generatedHtml, setGeneratedHtml] = useState('');
      const buttonRef = useRef();
      const [isDropShadowChecked, setDropShadowChecked] = useState(false);
      const [isStrokeChecked, setStrokeChecked] = useState(false); 
      const [textSize, setTextSize] = useState(16);
      const [borderRadius, setBorderRadius] = useState(50); // Default border radius
      const [showLabelInput, setShowLabelInput] = useState(true);
      const [buttonText, setButtonText] = useState('Button');

      useEffect(() => {
          // Update the generated HTML
          const boxShadowStyle = isDropShadowChecked ? 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);' : '';
          const borderStyle = isStrokeChecked ? '2px solid black' : 'none';
          const htmlCode = `<button style="color: ${textColor}; background: ${buttonColor}; border: 0 solid; 
          border-radius: ${borderRadius}px; font-size: ${textSize}px; ${boxShadowStyle} ${borderStyle}">${buttonText}</button>`;
          setGeneratedHtml(htmlCode);
      },  [buttonColor, textColor, isDropShadowChecked, isStrokeChecked, textSize, borderRadius, buttonText]);
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
          case 'label':
                setShowLabelInput(!showLabelInput);
          default:
              break;
          }
      };
        //border radius
      const handleBorderRadiusChange = (event) => {
          // Update border radius
          setBorderRadius(event.target.value);
      };
      const handleLabelInputChange = (event) => {
        setButtonText(event.target.value); 
      };

      const copyCodeToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = generatedHtml;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

      useEffect(() => {
          const element = buttonRef.current;
          const cssObj = window.getComputedStyle(element);
      
          // Specify the style properties you are interested in
          const propertiesOfInterest = ['color', 'background', 'borderRadius', 'font'];
      
          // Create an array of objects with specified properties and their values
          const objStyle = propertiesOfInterest.map((property) => ({
            property,
            value: cssObj.getPropertyValue(property),
          }));
      
          console.log(objStyle);
      }, []);
      
   
      
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
                  
              <button
                  id="btnPreview"
                  className="btnPreview"
                  ref={buttonRef}
                  style={{
                      color: textColor,
                      background: buttonColor,
                      border: `0 solid`,
                      borderRadius: `${borderRadius}px`,
                      fontSize: `${textSize}px`,
                      boxShadow: isDropShadowChecked ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                      border: isStrokeChecked ? '2px solid black' : 'none',
                    }}
                    >
                    {buttonText}
                </button>
              </div>
              <div className="adjust">
                  <ul className="checkboxes">
                      <li><label><input  type="checkbox" checked={isDropShadowChecked} onChange={() => handleCheckboxChange('dropShadow')} name="dropShadow"/> drop shadow</label></li>
                      <li><label><input type="checkbox" checked={isStrokeChecked} onChange={() => handleCheckboxChange('stroke')} name="stroke"/> stroke</label></li>
                      <li>
                        <label>
                            <input  
                                type="checkbox" 
                                checked={showLabelInput} 
                                onChange={() => handleCheckboxChange('label')} 
                                name="label"
                            /> 
                            label
                        </label>
                        {showLabelInput && (
                            <input
                                id='inputLabel'
                                type="text"
                                value={buttonText} 
                                onChange={handleLabelInputChange}  
                                placeholder="Enter button label"
                                className='container-input'
                            />
                        )}
                    </li>
                </ul>
                      
                  <div class="sliders">

                    <div className='box'>
                        <label for="textSizeSlider">text size</label> 
                      <input type="range" id="textSizeSlider" min="8"
                      max="50" value={textSize}  onChange={(e) => setTextSize(e.target.value)}
                      />
                      <br/>
                    </div>

                    <div className='box'>
                        <label for="borderRadiusSlider">border radius</label>
                        <input type="range" id="borderRadiusSlider" min="0"
                        max="100"
                        value={borderRadius}
                        onChange={(e) => setBorderRadius(e.target.value)}/>
                    <br/>
                    </div>
                    
                    <div className='box'>
                        <label>text color</label>
                        <input
                            type="color"
                            id="txtColorPicker"
                            value={textColor} // change textColor state
                            onChange={handleTextColorChange} // Update the buttonColor state on change
                        /> 
                    <br/>
                    </div>

                    <div className='box'>
                    <label for="colorSlider">color</label>
                    <input
                        type="color"
                        id="btnColorPicker"
                        value={buttonColor} // Use the dynamic buttonColor state
                        onChange={handleButtonColorChange} // Update the buttonColor state on change
                    />   
                    <br/>
                    </div>

                                 
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

  export default ButtonPage;