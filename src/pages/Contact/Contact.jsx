import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p className="contact-description">
                Feel free to leave a message. I'll get back to you as soon as I can!
            </p>
            <div className="google-form-container">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdn2cJB8-pKf6FaUMYRsOFe-txliNoCO5pI_8QoDGby5h_K8g/viewform?embedded=true"
                    width="800"
                    height="600"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">Loading…
                </iframe>
            </div>

            <div className="back-to-top-container">
                <button
                    className="back-to-top"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    Back to Portfolio
                </button>
            </div>
        </section>
    );
}

export default Contact;
