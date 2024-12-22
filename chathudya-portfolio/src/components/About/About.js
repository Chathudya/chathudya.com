import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-text">
                    I’m a <strong>Software Quality Assurance Engineer</strong> passionate about crafting seamless
                    digital experiences. With over <strong>2 years of expertise</strong> in <strong>functional
                    testing</strong>, <strong>automation</strong>, and <strong>agile methodologies</strong>, I thrive on
                    making software flawless and user-friendly.
                </p>
                <p className="section-text">
                    Think of me as the 🕵️‍♀️ <strong>Sherlock Holmes</strong> of testing—breaking things (intentionally,
                    of course) to ensure they don’t break when it matters most.
                </p>
                <p className="section-text">
                    Outside of work, you’ll find me immersed in 📚 books, balancing productivity guides and testing
                    manuals with captivating fiction
                </p>
                <p className="section-text">
                    What fuels me? <strong>Humor</strong>, <strong>thoughtful discussions</strong>, and the pursuit of
                    glitch-free apps—because every app deserves to shine! ✨
                </p>
            </div>
        </section>
    );
};

export default About;
