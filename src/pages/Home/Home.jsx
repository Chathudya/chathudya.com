import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home" id="home">
            <h2>Welcome to My Portfolio</h2>
            <p>Your one-stop solution to learn more about me!</p>
            <div className="profile-image-container">
                <img
                    src="./images/profile.jpeg"
                    alt="Chathudya"
                    className="profile-image"
                />
            </div>
        </div>
    );
}

export default Home;
