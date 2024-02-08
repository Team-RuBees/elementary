import React, { Component } from "react"
import '../assets/css/aboutPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Logo from '../assets/images/elementary-red-logo.png';
import ReactRoundedImage from "react-rounded-image"
import calangian from '../assets/images/mary-joyce-calangian.jpg';
import galicia from '../assets/images/trisha-camille-galicia.jpg';
import glodoviza from '../assets/images/aliza-ashly-glodoviza.jpg';
import margallo from '../assets/images/acel-gabrielle-margallo.jpg';
import reyles from '../assets/images/uriel-ryan-reyles.png';
import trinidad from '../assets/images/john-lawrence trinidad.png';


const AboutPage = () => {
  return (
    <div>
      <NavBar />

      <h1 className="logo">
        {/* <img src={Logo} alt="Logo" className="Logo"/> */}
        &lt;element&gt;<span>ary</span>
      </h1>

      <div className="slanted-text">ui made simple</div>

      <section className='container'>
        <h2 className='title'>about us</h2>
        <div className='about-us-p' >
          Embark on a journey with a group of visionary college student developers who are redefining the boundaries of web development.
          In the dynamic world of coding, where time and expertise are precious commodities, these intelligent individuals have harnessed their collective talents to address the challenges faced in crafting compelling user interfaces.
          Their brainchild, &lt;element&gt;ary, stands as a testament to their commitment to innovation.
        </div>
      </section>

      <section className='container-team'>
        <br />
        <h2 className='title-team'>meet the team</h2>
      </section>

      {/* Circles with names */}
      <div className="team-circles">
        <div className="team-member">

          <div class="center">
          <ReactRoundedImage
                image={calangian}
                roundedColor="#000000" 
                imageWidth="120"
                imageHeight="120"
                roundedSize="0"
                borderRadius="50%"
                />
          </div>
            
          <p className="name p-c">Mary Joyce Calangian</p>
        </div>
        <div className="team-member">
        <div class="center">
          <ReactRoundedImage
                image={galicia}
                roundedColor="#000000" 
                imageWidth="120"
                imageHeight="120"
                roundedSize="0"
                borderRadius="50%"
                />
          </div>
          <p className="name p-c">Trisha Camille Galicia</p>
        </div>
        <div className="team-member">
        <div class="center">
          <ReactRoundedImage
                image={glodoviza}
                roundedColor="#000000" 
                imageWidth="120"
                imageHeight="120"
                roundedSize="0"
                borderRadius="50%"
                />
          </div>
          <p className="name p-c">Aliza Ashly Glodoviza</p>
        </div>
        <div className="team-member">
        <div class="center">
          <ReactRoundedImage
                image={margallo}
                roundedColor="#000000" 
                imageWidth="120"
                imageHeight="120"
                roundedSize="0"
                borderRadius="50%"
                />
          </div>
          <p className="name p-c">Acel Gabrielle Margallo</p>
        </div>
        <div className="team-member">
        <div class="center">
          <ReactRoundedImage
                image={reyles}
                roundedColor="#000000" 
                imageWidth="120"
                imageHeight="120"
                roundedSize="0"
                borderRadius="50%"
                />
          </div>
          <p className="name p-c">Uriel Ryan Reyles</p>
        </div>
        <div className="team-member">
        <div class="center">
          <ReactRoundedImage
                image={trinidad}
                roundedColor="#000000" 
                imageWidth="120"
                imageHeight="120"
                roundedSize="0"
                borderRadius="50%"
                />
          </div>
          <p className="name p-c">John Lawrence Trinidad</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;