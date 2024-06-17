import React from 'react';
import { TopBanner, OurWork, CaseStudies, Testimonials, TopBannerHome, Services } from 'components';
import './_home.scss';

export const Home: React.FC = () => {
  return (
    <main className="main">
      <TopBannerHome />
      <TopBanner />
      <OurWork />
      <CaseStudies />
      <Testimonials />
    </main>
  );
};
