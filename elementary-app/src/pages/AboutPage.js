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
        element&gt;<span>ary</span>
      </h1>

      <div className="slanted-text">ui made simple</div>

      <section style={{ width: '50%', margin: '20px auto', padding: '20px', textAlign: 'center', background: 'linear-gradient(135deg, #CE3636, #720505)', color: 'white', borderRadius: '50px' }}>
        <h2 style={{ marginTop: '0', fontWeight: '500', marginBottom: '15px' }}>about us</h2>
        <div className='about-us-p' >
          Embark on a journey with a group of visionary college student developers who are redefining the boundaries of web development.
          In the dynamic world of coding, where time and expertise are precious commodities, these intelligent individuals have harnessed their collective talents to address the challenges faced in crafting compelling user interfaces.
          Their brainchild, &lt;element&gt;ary, stands as a testament to their commitment to innovation.
        </div>
      </section>

      <section style={{ width: '50%', margin: '20px auto', textAlign: 'center', color: '#981313' }}>
        <br />
        <h2 style={{ color: '#981313', fontWeight: '500' }}>meet the team</h2>
      </section>

      {/* Circles with names */}
      <div className="team-circles">
        <div className="team-member">
          <div className="circle"></div>
          <p className="about-us-p">Mary Joyce Calangian</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="about-us-p">Trisha Camille Galicia</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="about-us-p">Aliza Ashly Glodoviza</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="about-us-p">Acel Gabrielle Margallo</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="about-us-p" style={{ marginLeft: '37px' }}>Uriel Ryan Reyles</p>
        </div>
        <div className="team-member">
          <div className="circle"></div>
          <p className="about-us-p">John Lawrence Trinidad</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
