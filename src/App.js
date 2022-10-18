import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sports from './components/Sports';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sports />
      <About />
      <Footer />
    </div>
  );
}

export default App;