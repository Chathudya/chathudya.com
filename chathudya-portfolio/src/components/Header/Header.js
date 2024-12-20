import React, { useState } from 'react';

const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <header className="header-container">
            <h1>Chathudya's Portfolio</h1>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
        </header>
    );
};

export default Header;
