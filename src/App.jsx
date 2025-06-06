import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div>
        <Header />
        <Navigation />
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
