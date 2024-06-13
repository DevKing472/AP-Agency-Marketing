import React from 'react';
import { TopBanner, OurWork, Services } from 'components';
import './_home.scss'

export const Home: React.FC = () => {
  return (
    <main className="main">
      <TopBanner />
      <OurWork />
      <Services />

      <section id="about-us">
        <h1>About Us</h1>
        <p>Information about our team.</p>
      </section>
    </main>
  );
};
