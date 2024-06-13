import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from 'assets/images/logo.png';
import './_header.scss';

export const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <header className="justify-center" id="home">
      <div className="header">
        <div className="header__logo mt-20">
          <img src={logo} alt="Logo" />
        </div>
        <button className="header__toggle mt-20" onClick={handleNavToggle}>
          ☰
        </button>
        <nav className={`header__nav mt-20 ${isNavVisible ? 'header__nav--visible' : ''}`} id="navbarList">
          <Link to="home" smooth={true} duration={500} onClick={handleNavToggle}>
            Home
          </Link>
          <Link to="our-work" smooth={true} duration={500} onClick={handleNavToggle}>
            Our Work
          </Link>
          <Link to="services" smooth={true} duration={500} onClick={handleNavToggle}>
            Services
          </Link>
          <Link to="about-us" smooth={true} duration={500} onClick={handleNavToggle}>
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};
