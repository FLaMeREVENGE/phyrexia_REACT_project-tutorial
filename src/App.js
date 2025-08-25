import React from 'react';
import { Helmet } from 'react-helmet';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Helmet>
      <title>Phyrexia - All will be one</title>
      <link rel="icon" href="/favicon.ico" />
    </Helmet>

    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
