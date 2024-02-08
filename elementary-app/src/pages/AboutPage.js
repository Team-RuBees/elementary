import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Logo from '../assets/images/elementary-red-logo.png';

import '../assets/css/aboutPage.css';

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
          <div className="circle"></div>
          <p className="name">Mary Joyce Calangian</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="name">Trisha Camille Galicia</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="name">Aliza Ashly Glodoviza</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="name">Acel Gabrielle Margallo</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="name">Uriel Ryan Reyles</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="name">John Lawrence Trinidad</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
