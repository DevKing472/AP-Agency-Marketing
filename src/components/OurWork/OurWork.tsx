import React from 'react';
import './_ourWork.scss';

import logo1 from 'assets/images/clients/logo_1.png';
import logo2 from 'assets/images/clients/logo_2.png';
import logo3 from 'assets/images/clients/logo_3.png';
import logo4 from 'assets/images/clients/logo_4.png';
import logo5 from 'assets/images/clients/logo_5.jpeg';

export const OurWork: React.FC = () => {
  return (
    <section className="ourWork mt-150" id="our-work">
      <h2 className="cl-yel"><strong>10 Years Of Canadian Legacy</strong></h2>
      <p className="cl-yel mt-20">
        At AP Digital Agency, we exceed expectations by delivering more than we promise, every time
      </p>
      <div className="ourWork__customers">
        <div className="img-container">
          <img className="ourWork_logo" src={logo1} alt="logo-1" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo2} alt="logo-2" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo3} alt="logo-3" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo4} alt="logo-4" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo5} alt="logo-5" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo1} alt="logo-6" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo2} alt="logo-7" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo3} alt="logo-8" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo4} alt="logo-9" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo5} alt="logo-10" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo1} alt="logo-11" />
        </div>
        <div className="img-container">
          <img className="ourWork_logo" src={logo2} alt="logo-12" />
        </div>
      </div>
    </section>
  );
};
