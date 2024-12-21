import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles/global.css';

const App = () => {
    return (
        <div>
            <Hero /> {/* Add the Hero component */}
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
