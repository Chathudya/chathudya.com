// import React from 'react';
//
// const About = () => {
//     return (
//         <section id="about" className="about-container">
//             <h2>About Me</h2>
//             <div className="about-content">
//                 <p>
//                     I am a Software Quality Assurance Engineer with over 2 years of experience in functional testing,
//                     automation, and agile methodologies. My passion lies in delivering high-quality solutions and ensuring seamless
//                     user experiences through meticulous testing and innovative problem-solving.
//                 </p>
//                 <p>
//                     My educational journey began at Princess of Wales College, followed by completing my Ordinary Level (O/L)
//                     and Advanced Level (A/L) examinations at Visakha Vidyalaya Colombo,
//                     I later earned a Bachelor of Science BSc.(Hons) in Information Technology from the Vavuniya Campus of the University
//                     of Jaffna, which laid a solid foundation for my career.
//                 </p>
//             </div>
//             <div className="divider">
//                 <span>★</span>
//             </div>
//             <div className="additional-content">
//                 <p>
//                     When I'm not breaking bugs, I enjoy exploring new technologies, reading about psychology in the workplace,
//                     and practicing yoga for mindfulness. I am a Software QA Engineer passionate about quality and continuous improvement.
//                 </p>
//             </div>
//         </section>
//     );
// };
//
// export default About;

import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                    I am a Software Quality Assurance Engineer with over 2 years of experience in functional testing, automation, and agile methodologies.
                </p>
                <div className="divider">
                    <span>●</span>
                </div>
                <p>
                    My educational journey began at Princess of Wales College, followed by Ordinary and Advanced Level studies at Visakha Vidyalaya, Colombo, specializing in Biology and Arts. I graduated with a BSc Hons in Information Technology from the Vavuniya Campus of the University of Jaffna.
                </p>
            </div>
        </section>
    );
};

export default About;
