import React from 'react';
import './_testimonials.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import studies_1 from 'assets/images/studies_1.jpg';
import studies_2 from 'assets/images/studies_2.jpg';
import studies_3 from 'assets/images/studies_3.jpg';

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
              <img className="client-img" src={studies_1} alt="studies-1" />
              <p>Johon Smith</p>
            </div>
            <div className="client-right">
              <h2>Don't Believe Us. Check Client Word.</h2>
              <p>
                Just simply amazing. Feel lucky user their studies. Highly appreciate their studies & highly
                recommended to others.
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={studies_2} alt="studies-1" />
              <p>Brim Cooper</p>
            </div>
            <div className="client-right">
              <h2>Don't Believe Us. Check Client Word.</h2>
              <p>
                Just simply amazing. Feel lucky user their studies. Highly appreciate their studies & highly
                recommended to others.
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={studies_3} alt="studies-1" />
              <p>Cameron Gomez</p>
            </div>
            <div className="client-right">
              <h2>Don't Believe Us. Check Client Word.</h2>
              <p>
                Just simply amazing. Feel lucky user their studies. Highly appreciate their studies & highly
                recommended to others.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
