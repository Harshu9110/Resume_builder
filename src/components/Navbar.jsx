import React, { useState } from 'react';
import '../components/css/Navbar.css'; // Import the CSS file for styling
import image from '../assets/curriculum-vitae.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-white">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler">
            <a href="index.html" className="navbar-brand">
              <img src={image} alt="Brand Icon" className="navbar-brand-icon" />
              <span className="navbar-brand-text">
            
                <span className="text-build">build</span>
                <span className="text-resume">resume.</span>
              </span>
            </a>
            <button className="navbar-toggler" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>
          {isOpen && (
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
              <ul>
                <ul><a href="#home">Home</a></ul>
                <ul><a href="#about">About</a></ul>
                <ul><a href="#contact">Contact</a></ul>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
