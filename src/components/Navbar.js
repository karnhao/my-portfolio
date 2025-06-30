import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-left">
        <Link to="/" className="nav-logo">Sittipat</Link>
      </div>

      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div
          className="dropdown"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="dropdown-label">Projects ▾</span>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="dropdown-content"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/projects/rabbitCageControl">Rabbit Cage Control & Management</Link>
                <Link to="/projects/test1">TEST</Link>
                <Link to="https://youtu.be/dQw4w9WgXcQ?si=2DbGClLFVySEIYoz" target="_blank">More coming soon...</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
