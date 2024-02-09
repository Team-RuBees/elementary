import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/NavBar.css'; // Import your CSS file
import Logo from '../assets/images/elementary-red-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { getCookie, isCookieExpired, removeCookie } from '../utils/cookies';

const NavBar = () => {
  const navigate = useNavigate();
  const user = getCookie("name");

  const handleLogout = () => {
    removeCookie("name");
    navigate("/login");
  };

  return (
    <div>
      <header id="NavBar">
        <nav>
          <img src={Logo} alt="Logo" className="Logo" />
          <h4 for="toggler">
            <FontAwesomeIcon icon={faBars} />
          </h4>
          <input type="checkbox" id="toggler" name="" />
          <div className="menu">
            <ul className="list">
              <li>
                <Link to="/home" className="btn">home</Link>
              </li>
              <li>
                <Link to="/button" className="btn"> generate</Link>
              </li>
              <li>
                <Link to="/help" className="btn"> support</Link>
              </li>
              <li>
                <Link to="/about" className="btn"> about</Link>
              </li>
              {user ? (
                <li className="nav-right-container right-links">
                  <li>
                    <Link>
                      <p>{user}</p> </Link>
                  </li>
                  <li>
                    <button
                      className="signin-button" onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup" className="signup"> sign up </Link>
                  </li>
                  <li>
                    <Link to="/login" className="login">
                      sign in
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;