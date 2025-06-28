import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-logo">Sittipat</Link>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <div className="dropdown">
        <span className="dropdown-label">Projects ▾</span>
        <div className="dropdown-content">
          <Link to="/projects/haoKUWidget">HaoKUWidget</Link>
          <Link to="/projects/haoVSort">HaoVSort</Link>
          <Link to="/projects/haoSj">HaoSj</Link>
          <Link to="/projects/haoDiscordBot">HaoDiscordBot</Link>
          <Link to="/projects/melt">Melt</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
