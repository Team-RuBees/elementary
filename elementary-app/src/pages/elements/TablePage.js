import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';  // Update the path based on your project structure
import Footer from '../../components/Footer';  // Update the path based on your project structure
import CustomSideBar from '../../components/CustomSideBar';  // Update the path based on your project structure
import '../../components/CustomSideBar.css';  // Update the path based on your project structure
import uploadIcon from '../../assets/images/upload-icon.png';  // Update the path based on your project structure

const TablePage = () => {

    const [buttonColor, setButtonColor] = useState('#808080'); //gray
    const [textColor, setTextColor] = useState('#ffffff'); // white text
    const [generatedHtml, setGeneratedHtml] = useState('');


    //for table page
    const [tableRowCount, setTableRowCount] = useState(3);
    const [tableColumnCount, setTableColumnCount] = useState(3);

    useEffect(() => {
        let htmlCode = `<table style={{ borderCollapse: 'collapse', width: '100%' }}>`;
    
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
    }, [tableRowCount, tableColumnCount]);
    

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
            <li><a href="customize">button</a></li>
            <li><a href="customize">toggle</a></li>
            <li><a href="customize">radio button</a></li>
            <li><a href="customize">input box</a></li>
            <li><a href="customize">cards</a></li>
            <li><a href="customize">footer</a></li>
            <li><a href="customize">navbar</a></li>
            <li><a href="customize">sidebar</a></li>
            <li><a href="customize">TABLE</a></li>
            <li><a href="customize">loader</a></li>
            <li><a href="customize">form</a></li>
        </ul>
    </div>
    

        <div className="page_generator">

            
        <div className="preview_container">
            <table style={{ borderCollapse: 'collapse', width: '80%' }}>
                <tbody>
                    {Array.from({ length: tableRowCount }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: tableColumnCount }).map((_, colIndex) => (
                                <td key={colIndex} style={{ border: '1px solid #000', padding: '8px' }}></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            <div className="adjust">
                {/* <ul className="checkboxes">
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
                    <label for="rowCountSlider">Rows</label> <br/>
                    <input type="range" id="rowCountSlider" min="1" max="10" value={tableRowCount} onChange={(e) => setTableRowCount(e.target.value)} />

                    <label for="columnCountSlider">Columns</label> <br/>
                    <input type="range" id="columnCountSlider" min="1" max="10" value={tableColumnCount} onChange={(e) => setTableColumnCount(e.target.value)} />
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

export default TablePage;