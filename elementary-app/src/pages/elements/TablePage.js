import React from 'react';
import '../../assets/css/customizePage.css'; 
import NavBar from '../../components/NavBar'; 
import Footer from '../../components/Footer';
import CustomSideBar from '../../components/CustomSideBar';
import '../../components/CustomSideBar.css';
import { useState, useEffect, useRef } from 'react';



const TablePage = () => {
    const [generatedHtml, setGeneratedHtml] = useState('');;
    const [tableLineColor, setTableLineColor] = useState('#000000'); // Default table line color (black)
    const [tableBgColor, setTableBgColor] = useState('#ffffff'); // Default table background color (white)
    const [borderWeight, setBorderWeight] = useState(1); // Default border weight
    //for table page
    const [tableRowCount, setTableRowCount] = useState(3);
    const [tableColumnCount, setTableColumnCount] = useState(3);

    useEffect(() => {
        let htmlCode = `<table style={{ borderCollapse: 'collapse', width: '100%' ,  border: '${borderWeight}px solid 
        ${tableLineColor}', background-color: '${tableBgColor}'; }}>`;
    
        // Add table headers
        htmlCode += `<thead><tr>`;
        for (let colIndex = 1; colIndex <= tableColumnCount; colIndex++) {
            htmlCode += `<th>Header ${colIndex}</th>`;
        }
        htmlCode += `</tr></thead>`;
    
        // Add table body
        htmlCode += `<tbody>`;
        for (let rowIndex = 1; rowIndex <= tableRowCount; rowIndex++) {
            htmlCode += `<tr>`;
            for (let colIndex = 1; colIndex <= tableColumnCount; colIndex++) {
                htmlCode += `<td>Row ${rowIndex}, Cell ${colIndex}</td>`;
            }
            htmlCode += `</tr>`;
        }
        htmlCode += `</tbody>`;
    
        htmlCode += `</table>`;
    
        setGeneratedHtml(htmlCode);
    },  [tableLineColor, tableBgColor, borderWeight]);
    
    const handleTableLineColorChange = (event) => {
        // Update table line color
        setTableLineColor(event.target.value);
    };
    
    const handleTableBgColorChange = (event) => {
        // Update table background color
        setTableBgColor(event.target.value);
    };

   // Function to handle changes in border weight
    const handleBorderWeightChange = (event) => {
    setBorderWeight(event.target.value);
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
            
            <table style={{ borderCollapse: 'collapse', width: '80%',  border: `${borderWeight}px solid ${tableLineColor}`}}>
                <tbody>
                    {Array.from({ length: tableRowCount }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({ length: tableColumnCount }).map((_, colIndex) => (
                            <td key={colIndex} style={{ border: `${borderWeight}px solid ${tableLineColor}`, padding: '8px', background: `${tableBgColor}` }}></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
              
    </div>

            <div className="adjust">
                <div class="sliders">
                    <label for="rowCountSlider">Rows</label> <br/>
                    <input type="range" id="textSizeSlider" min="1" max="10" value={tableRowCount} onChange={(e) => setTableRowCount(e.target.value)} />

                    <label for="columnCountSlider">Columns</label> <br/>
                    <input type="range" id="borderRadiusSlider" min="1" max="10" value={tableColumnCount} 
                    onChange={(e) => setTableColumnCount(e.target.value)} />

                    <label htmlFor="borderWeightSlider">Border Weight</label> <br />
                    <input type="range" 
                            id="textSizeSlider" 
                            min="1" 
                            max="10" 
                            value={borderWeight} 
                            onChange={handleBorderWeightChange} 
                        />

                    <label htmlFor="tableLineColorPicker">Border Color</label>
                    <input type="color" id="txtColorPicker" value={tableLineColor} onChange={handleTableLineColorChange} />
                    
                    <label htmlFor="tableeBgColorPicker">Background Color</label>
                    <input type="color" id='btnColorPicker' value={tableBgColor} onChange={handleTableBgColorChange} />
                    
                </div>
            </div>
            <div className="generatedCode-container">
                        <div className="copyCodeRectangle">
                            <button className="copyCodeButton">Copy Code</button>
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

export default TablePage;