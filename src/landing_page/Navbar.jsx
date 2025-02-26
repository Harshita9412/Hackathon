import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li> {/* Use Link to navigate to Home */}
          <li><Link to="/about">About</Link></li> {/* Use Link to navigate to About */}
          <li><Link to="/services">Services</Link></li> {/* Link to Services */}
          <li><Link to="/contact">Contact</Link></li> {/* Link to Contact */}
          <li><Link to="/reviews">Reviews</Link></li> {/* Link to Reviews */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
