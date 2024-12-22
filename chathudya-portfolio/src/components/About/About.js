import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">About Me</h2>
                <p>
                    I’m a <strong>Software Quality Assurance Engineer</strong> passionate about crafting seamless
                    digital experiences. With over <strong>2 years of expertise</strong> in <strong>functional
                    testing</strong>, <strong>automation</strong>, and <strong>agile methodologies</strong>, I thrive on
                    making software flawless and user-friendly.
                </p>
                <p>
                    Think of me as the 🕵️‍♀️ <strong>Sherlock Holmes</strong> of testing—breaking things (intentionally,
                    of course) to ensure they don’t break when it matters most.
                </p>
                <p>
                    Outside of work, you’ll find me immersed in 📚 books, balancing productivity guides and testing
                    manuals with captivating fiction (<em>yes, I’m slightly obsessed with <strong>A Court of Thorns and
                    Roses</strong></em>).
                </p>
                <p>
                    What fuels me? <strong>Humor</strong>, <strong>thoughtful discussions</strong>, and the pursuit of
                    glitch-free apps—because every app deserves to shine! ✨
                </p>
            </div>
        </section>

    );
};

export default About;