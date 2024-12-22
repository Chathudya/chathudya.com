import React from 'react';
import './Hero.css'; // Import the Hero-specific styles
import profileImage from '../../assets/images/chathudya.jpeg';
const Hero = () => {
    return (
        <section className="hero-container">
            <img
                src={profileImage}
                alt="Chathudya"
                className="hero-image"
            />
            <h1>
                Hi, I'm <span className="highlight">Chathudya 👋</span>
            </h1>
            <p className="subheading">
                💻 Software Quality Assurance Engineer | 📚 Lifelong Learner | 🧩 Creative Problem Solver
            </p>
            <button
                className="cta-button"
                onClick={() =>
                    document.getElementById('contact').scrollIntoView({
                        behavior: 'smooth',
                    })
                }
            >
                Get in Touch
            </button>
        </section>
    );
};
export default Hero;