import React, { useState, useEffect } from 'react';
import '../../assets/css/customizePage.css'; 
import NavBar from '../../components/NavBar'; 
import Footer from '../../components/Footer';
import CustomSideBar from '../../components/CustomSideBar';
import '../../components/CustomSideBar.css';

const CardPage = () => {
    const [generatedHtml, setGeneratedHtml] = useState('');
    const [cardBgColor, setCardBgColor] = useState('#ffffff'); // Default card background color
    const [cardTextColor, setCardTextColor] = useState('#000000'); // Default card text color
    const [cardBorderRadius, setCardBorderRadius] = useState(0); // Default card border radius
    const [cardPadding, setCardPadding] = useState(16); // Default card padding
    const [cardWidth, setCardWidth] = useState(300); // Default card width
    const [cardHeight, setCardHeight] = useState(200); // Default card height

    useEffect(() => {
        // Generate HTML code for the card
        const htmlCode = `<div style="color: '${cardTextColor}'; background-color: ${cardBgColor}; width: ${cardWidth}px; 
        height:'${cardHeight}'">Card Content</div>`;
        setGeneratedHtml(htmlCode);
    }, [cardTextColor, cardBgColor, cardWidth,cardHeight]);

    const handleCardBgColorChange = (event) => {
        setCardBgColor(event.target.value);
    };

    const handleCardTextColorChange = (event) => {
        setCardTextColor(event.target.value);
    };

    const handleCardBorderRadiusChange = (event) => {
        setCardBorderRadius(event.target.value);
    };

    const handleCardPaddingChange = (event) => {
        setCardPadding(event.target.value);
    };

    const handleCardWidthChange = (event) => {
        setCardWidth(event.target.value);
    };

    const handleCardHeightChange = (event) => {
        setCardHeight(event.target.value);
    };

    const copyCodeToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = generatedHtml;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    const cardStyle = {
        color: cardTextColor,
        backgroundColor: cardBgColor,
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        borderRadius: `${cardBorderRadius}px`,
        padding: `${cardPadding}px`
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
                        <div className="card" style={cardStyle}>
                            <h3>Card Title</h3>
                            <p>Card content goes here...</p>
                        </div>
                    </div>
                    <div className="adjust">
                        <div className="sliders">
                            <label htmlFor="cardBgColorPicker">Background Color</label>
                            <input type="color" id="txtColorPicker" value={cardBgColor} onChange={handleCardBgColorChange} />
                            <br/>

                            <label htmlFor="cardTextColorPicker">Text Color</label>
                            <input type="color" id="txtColorPicker" value={cardTextColor} onChange={handleCardTextColorChange} />
                            <br/>

                            <label htmlFor="cardBorderRadiusSlider">Border Radius</label>
                            <input type="range" id="textSizeSlider" min="0" max="50" value={cardBorderRadius} onChange={handleCardBorderRadiusChange} />
                            <br/>

                            <label htmlFor="cardPaddingSlider">Padding</label>
                            <input type="range" id="textSizeSlider" min="0" max="50" value={cardPadding} onChange={handleCardPaddingChange} />
                            <br/>

                            <label htmlFor="cardWidthSlider">Width</label>
                            <input type="range" id="textSizeSlider" min="100" max="500" value={cardWidth} onChange={handleCardWidthChange} />
                            <br/>

                            <label htmlFor="cardHeightSlider">Height</label>
                            <input type="range" id="textSizeSlider" min="100" max="500" value={cardHeight} onChange={handleCardHeightChange} />
                            <br/>
                            
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


export default CardPage;
