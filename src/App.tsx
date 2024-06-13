import React from 'react';
import { Header } from 'components';
import { Home } from 'pages';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
};

export default App;
