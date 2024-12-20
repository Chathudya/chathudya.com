import React from 'react';
import '../../assets/styles/global.css';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>My Work</h2>
            <div className="projects">
                <div className="project">
                    <h3>Healthcare Automation Suite</h3>
                    <p>Developed an automation framework for end-to-end testing of healthcare applications, reducing manual
                        testing time by 40%.</p>
                    <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project">
                    <h3>API Test Automation</h3>
                    <p>Implemented API testing workflows using Postman and Python for a logistics platform, ensuring 99% uptime
                        of services.</p>
                    <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
