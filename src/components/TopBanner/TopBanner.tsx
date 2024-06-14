import React from 'react';
import BannerVideo from 'assets/videos/AP_Digital_Agency_revised.mp4';
import './_top-banner.scss';

export const TopBanner = () => {
  return (
    <section className="top-banner section">
      {/* <video controls autoPlay loop muted className="top-banner__video" playsInline> */}
      <video controls className="top-banner__video">
        <source src={BannerVideo} type="video/mp4" />
      </video>
      {/* </video> */}
      <div className="top-banner__description">
        <h2>Need help with lead generation?</h2>
        <div>
          <p className="mt-20 mb-30">
            <strong>
              We assist Toronto's leading brands with lead generation, social media marketing, and content creation.
            </strong>
          </p>
          <p className="mt-20 mb-30">
            <strong>Lead Generation</strong> - Let us handle your performance marketing with a promise of 30 leads a
            month for B2B businesses and even more for B2C, backed by a Money Back Guarantee.
          </p>
          <p className="mt-20 mb-30">
            <strong>Social Media Marketing</strong> - We craft the most engaging content for your brand, offering an
            affordable package at just $999/month.
          </p>
          <p className="mt-20 mb-30">
            <strong>Content Creation</strong> - Our team works with the city's top photographers, videographers, models
            and content creators to produce outstanding content for your brand.
          </p>
        </div>
        <button className="sign-up-btn">Sing Up Now</button>
      </div>
    </section>
  );
};
