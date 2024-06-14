import React from 'react';
import { TopBanner, OurWork, CaseStudies, Testimonials } from 'components';
import './_home.scss';

export const Home: React.FC = () => {
  return (
    <main className="main">
      <TopBanner />
      <OurWork />
      <CaseStudies />
      <Testimonials />
    </main>
  );
};
