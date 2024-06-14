import React from 'react';
import './_caseStudies.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import services_1 from 'assets/images/services_1.jpg';
import services_2 from 'assets/images/services_2.jpg';
import services_3 from 'assets/images/services_3.jpg';
import logo from 'assets/images/logo.png';

export const CaseStudies: React.FC = () => {
  const settings = {
    dots: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="services mt-150" id="caseStudies">
      <div className="services__left">
        <h6>Our Work Speaks for itself</h6>
        <p className="txt">
          We have been in industry for over 10 years now and have created some impact work within the categories...
        </p>
        <button className="btn-yel">FREE GROWTH SESSION</button>
      </div>
      <div className="services__right">
        <Slider {...settings}>
          <div className="service-gap">
            <img className="service-img" src={services_1} alt="service-1" />
            <div className="service-clientinfo">
              <h2>540%</h2>
              <p>increase in website traffic</p>
            </div>
          </div>
          <div className="service-gap">
            <img className="service-img" src={services_2} alt="service-2" />
            <div className="service-clientinfo">
              <h2>220%</h2>
              <p>increase in Google Ads leads</p>
            </div>
          </div>
          <div className="service-gap">
            <img className="service-img" src={services_3} alt="service-3" />
            <div className="service-clientinfo">
              <h2>100%</h2>
              <p>of keywords in top 3 search results</p>
            </div>
          </div>
          <div className="service-gap">
            <img className="service-img" src={logo} alt="service-4" />
            <div className="service-clientinfo">
              <h2>180%</h2>
              <p>of keywords in top 6 search results</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
