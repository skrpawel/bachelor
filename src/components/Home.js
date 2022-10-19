import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Sports from './Sports';
import About from './About';
import Footer from './Footer';



function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <Sports />
            <About />
            <Footer />
        </div>
    );
}

export default Home;