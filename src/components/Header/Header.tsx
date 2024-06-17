import React, { useState } from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import logo from 'assets/images/logo.png';
import './_header.scss';

export const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header__container" id="home">
      <div className="header__color"></div>
      <div className="header">
        <Link className="header__logo" to="home" smooth={true} duration={500} onClick={handleNavToggle}>
          <img src={logo} alt="Logo" />
        </Link>
        <span>
          <button className="header__toggle" onClick={handleNavToggle}>
            ☰
          </button>
        </span>
        <nav
          className={classNames({
            header__nav: true,
            'header__nav--visible': isNavVisible,
          })}
          id="navbarList"
        >
          <Link to="home" smooth={true} duration={500} onClick={handleNavToggle}>
            Home
          </Link>
          <Link to="our-work" smooth={true} duration={500} onClick={handleNavToggle}>
            Our Work
          </Link>
          <Link to="caseStudies" smooth={true} duration={500} onClick={handleNavToggle}>
            Case Stuides
          </Link>
          <Link to="testimonials" smooth={true} duration={500} onClick={handleNavToggle}>
            Testimomials
          </Link>
        </nav>
      </div>
    </header>
  );
};
