import React from 'react';
import { Header, Footer } from 'components';
import { Home } from 'pages';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
};

export default App;
