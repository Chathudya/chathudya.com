import React from 'react';
import './Contact.css'; // Ensure you have a separate CSS file for the Contact component
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
            <h2>Contact Me</h2>
            <p>
                If you’d like to discuss a project or just want to say hi, feel free to reach out.
                I’d love to hear from you!
            </p>
            <form>
                <input type="text" placeholder="Your Full Name" required />
                <input type="email" placeholder="Your Email Address" required />
                <textarea placeholder="Write your message here" required />
                <button type="submit">Send</button>
            </form>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/chathudya" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/chathudya" target="_blank" rel="noreferrer">
                    <FaGithub />
                    <span>GitHub</span>
                </a>
                <a href="mailto:chathudya@gmail.com">
                    <FaEnvelope />
                    <span>Email</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;
