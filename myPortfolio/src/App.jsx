// App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
