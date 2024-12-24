import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about" id="about">
            <section id="about" className="about-section">
                <div className="container">
                    <h2 className="about-heading">🌟 About Me</h2>
                    <p className="about-text">
                        Hi, I’m a <strong>Software Quality Assurance Engineer</strong> with a mission to craft seamless
                        and reliable digital experiences.
                        With <strong>2+ years of expertise</strong> in <strong>functional
                        testing</strong>, <strong>automation</strong>, and <strong>agile methodologies</strong>,
                        I thrive on breaking things intentionally (so they don’t break unintentionally when it matters
                        most).
                    </p>
                    <p className="about-text">
                        When I’m not ensuring apps are glitch-free, you’ll find me on my yoga mat 🧘‍♀️, balancing body
                        and mind (because even critical bugs can’t disrupt my zen).
                        <p className="about-text">
                            And, let’s be honest, my day isn’t complete without at least two cups of coffee <span
                            className="coffee-emoji">☕
                        </span>—the unofficial fuel for every QA engineer.
                        </p>

                    </p>
                    <p className="about-text">
                        Outside of work, I’m a bookworm 📚, diving into productivity guides, testing manuals, and
                        captivating fiction.
                    </p>
                    <p className="about-text">
                        What fuels me? A mix of <strong>humor</strong>, <strong>thoughtful discussions</strong>, and the
                        pursuit of glitch-free apps—because every app deserves to sparkle! ✨
                    </p>
                </div>
            </section>

        </div>
    );
}

export default About;
