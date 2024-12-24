import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="about-heading">🌟 About Me</h2>
                <p className="about-text">
                    Hey, I’m <strong>Chathudya</strong>, a QA engineer who vibes with breaking stuff (on purpose) so the rest of the world doesn’t have to. I’m all about squashing bugs, writing slick Java code, and making sure every app runs smoother than your favorite playlist.
                </p>
                <p className="about-text">
                    Whether it’s automating tests, flexing my API skills with <strong>Postman</strong>, or sprinkling Python magic into workflows, I keep things functional—and a little extra. My motto? If it’s glitchy, it’s gotta go.
                </p>
                <p className="about-text">
                    When I’m not making apps sparkle, you’ll find me in my zen zone on a yoga mat 🧘‍♀️ or sipping
                    <span className="coffee-emoji" role="img" aria-label="coffee">☕</span> like it’s a life hack (because it is). Apps deserve their main-character moment, and I’m here to deliver it. ✨
                </p>
            </div>
        </section>
    );
}

export default About;
