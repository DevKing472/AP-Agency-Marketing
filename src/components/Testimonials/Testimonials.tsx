import React from 'react';
import './_testimonials.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import services_1 from 'assets/images/services_1.jpg';
import services_2 from 'assets/images/services_2.jpg';
import services_3 from 'assets/images/services_3.jpg';

export const Testimonials: React.FC = () => {
  const settings = {
    dots: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <section className="mt-150 testimonials" id="testimonials">
      <div className="testimonials__box">
        <Slider {...settings}>
          <div>
            <div className="client-left">
              <img className="client-img" src={services_1} alt="service-1" />
              <p>Johon Smith</p>
            </div>
            <div className="client-right">
              <h2>Don't Believe Us. Check Client Word.</h2>
              <p>
                Just simply amazing. Feel lucky user their services. Highly appreciate their service & highly
                recommended to others.
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={services_2} alt="service-1" />
              <p>Brim Cooper</p>
            </div>
            <div className="client-right">
              <h2>Don't Believe Us. Check Client Word.</h2>
              <p>
                Just simply amazing. Feel lucky user their services. Highly appreciate their service & highly
                recommended to others.
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={services_3} alt="service-1" />
              <p>Cameron Gomez</p>
            </div>
            <div className="client-right">
              <h2>Don't Believe Us. Check Client Word.</h2>
              <p>
                Just simply amazing. Feel lucky user their services. Highly appreciate their service & highly
                recommended to others.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
