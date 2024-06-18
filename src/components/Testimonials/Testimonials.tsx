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
              <p>Jennifer martinez</p>
            </div>
            <div className="client-right">
              <h2>CTO</h2>
              <p>
                I was hesitant to invest in a digital marketing agency, but AP Digital has proven to be worth every penny.
                Their team is incredibly knowledgeable and my ROI has increased significantly since partnering with them.
                Highly recommend!
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={studies_2} alt="studies-1" />
              <p>Melissa Green</p>
            </div>
            <div className="client-right">
              <h2>Director of IT</h2>
              <p>
                I've been working with AP Digital Agency for the past 6 months and I couldn't be happier with the results.
                They have helped me to increase my online visibility, website traffic and sales.
                They are professional, responsive and always willing to go the extra mile. Highly recommend this agency. 
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={studies_3} alt="studies-1" />
              <p>Natalie James</p>
            </div>
            <div className="client-right">
              <h2>Owner</h2>
              <p>
              I was looking for a web development company that could help me to create a professional website and I found it in AP.
              They have exceeded my expectations, the website is beautiful, easy to navigate, and fully responsive.
              Their team is very knowledgeable and they deliver the work on time. Highly recommend.
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={studies_3} alt="studies-1" />
              <p>Laleh Esfandiari</p>
            </div>
            <div className="client-right">
              <h2>IT Manager</h2>
              <p>
              This web development company has done an amazing job creating YouTube and TV advertisements for my business.
              They have a great understanding of how to create engaging and effective video content.
              They were professional, efficient, and always willing to go the extra mile to make sure that I was happy with the final product. 
              </p>
            </div>
          </div>
          <div>
            <div className="client-left">
              <img className="client-img" src={studies_3} alt="studies-1" />
              <p>Akhil Patel</p>
            </div>
            <div className="client-right">
              <h2>Owner</h2>
              <p>
              I have been working with AP Digital Agency for the past few months and they have done a fantastic job on my website.
              They were able to understand my vision and turn it into a reality.
              The site is visually stunning, easy to navigate and has been generating a lot of positive feedback.
              They are professional, responsive and always willing to make changes and revisions.
              I highly recommend them for anyone in need of web development services. 
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
