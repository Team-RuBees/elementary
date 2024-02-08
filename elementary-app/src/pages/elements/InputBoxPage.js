import React, { useState, useEffect } from 'react';
import '../../assets/css/customizePage.css'; 
import NavBar from '../../components/NavBar'; 
import Footer from '../../components/Footer';
import CustomSideBar from '../../components/CustomSideBar';
import '../../components/CustomSideBar.css';

const InputBoxPage = () => {
    const [generatedHtml, setGeneratedHtml] = useState('');
    const [inputTextColor, setInputTextColor] = useState('#000000'); // Default text color
    const [inputBgColor, setInputBgColor] = useState('#ffffff'); // Default background color
    const [borderWeight, setBorderWeight] = useState(1); // Default border weight
    const [borderRadius, setBorderRadius] = useState(0); // Default border radius
    const [inputWidth, setInputWidth] = useState(200); // Default input width
    const [inputHeight, setInputHeight] = useState(40); // Default input height

    useEffect(() => {
        // Generate HTML code for the input box
        const htmlCode = `<input type="text" style="color: ${inputTextColor}; background-color: ${inputBgColor}; border: ${borderWeight}px solid black; border-radius: ${borderRadius}px; width: ${inputWidth}px;">`;
        setGeneratedHtml(htmlCode);
    }, [inputTextColor, inputBgColor, borderWeight, borderRadius, inputWidth, inputHeight]);

    const handleInputTextColorChange = (event) => {
        setInputTextColor(event.target.value);
    };

    const handleInputBgColorChange = (event) => {
        setInputBgColor(event.target.value);
    };

    const handleBorderWeightChange = (event) => {
        setBorderWeight(event.target.value);
    };

    const handleBorderRadiusChange = (event) => {
        setBorderRadius(event.target.value);
    };

    const handleInputWidthChange = (event) => {
        setInputWidth(event.target.value);
    };
    
    const handleInputHeightChange = (event) => {
        setInputHeight(event.target.value);
    };

    const copyCodeToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = generatedHtml;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    return (
        <div>
            <NavBar/>
            <div className="content">   
                <div class="CustomSideBar">
                <ul>
              <li><a href="button">button</a></li>
              <li><a href="toggle">toggle</a></li>
              <li><a href="radiobutton">radio button</a></li>
              <li><a href="inputbox">input box</a></li>
              <li><a href="cards">cards</a></li>
              <li><a href="footer">footer</a></li>
              <li><a href="navbar">navbar</a></li>
              <li><a href="sidebar">sidebar</a></li>
              <li><a href="table">table</a></li>
              <li><a href="loader">loader</a></li>
              <li><a href="form">form</a></li>
          </ul>
                </div>
                <div className="page_generator">
                    <div className="preview_container">
                        <input 
                            type="text"
                            placeholder="Type here..." 
                            style={{ 
                                color: inputTextColor, 
                                backgroundColor: inputBgColor, 
                                border: `${borderWeight}px solid black`, 
                                borderRadius: `${borderRadius}px`, 
                                width: `${inputWidth}px`,
                                height: `${inputHeight}px`
                            }} 
                        />
                    </div>

                <div className="adjust">
                    <div class="sliders">
                        <label htmlFor="inputTextColorPicker">Text Color</label>
                        <input 
                            type="color" 
                            id="txtColorPicker" 
                            value={inputTextColor} 
                            onChange={handleInputTextColorChange} 
                        />
                        
                        <label htmlFor="inputBgColorPicker">Background Color</label>
                        <input 
                            type="color" 
                            id="txtColorPicker" 
                            value={inputBgColor} 
                            onChange={handleInputBgColorChange} 
                        />
                        
                        <label htmlFor="borderWeightSlider">Border Weight</label>
                        <input 
                            type="range" 
                            id="textSizeSlider" 
                            min="1" 
                            max="10" 
                            value={borderWeight} 
                            onChange={handleBorderWeightChange} 
                        />

                        <label htmlFor="borderRadiusSlider">Border Radius</label>
                        <input 
                            type="range" 
                            id="textSizeSlider" 
                            min="0" 
                            max="50" 
                            value={borderRadius} 
                            onChange={handleBorderRadiusChange} 
                        />

                        <label htmlFor="inputWidthSlider">Input Width</label>
                        <input 
                            type="range" 
                            id="textSizeSlider" 
                            min="100" 
                            max="400" 
                            value={inputWidth} 
                            onChange={handleInputWidthChange} 
                        />

                        <label for="inputHeightSlider">Height</label> <br/>
                        <input 
                            type="range" 
                            id="textSizeSlider" 
                            min="20" 
                            max="200" 
                            value={inputHeight} 
                            onChange={handleInputHeightChange} 
                        />
                    </div>
                </div>
                    <div className="generatedCode-container">
                        {/* Generated HTML code */}
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

export default InputBoxPage;
