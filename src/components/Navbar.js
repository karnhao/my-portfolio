import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownHovered, setDropdownHovered] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Hamburger Icon */}
      <div
        className="navbar-toggle"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

      {/* Desktop View */}
      <div className="navbar-right desktop-only">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdownHovered(true)}
          onMouseLeave={() => setDropdownHovered(false)}
        >
          <span className="dropdown-label">Projects ▾</span>

          <AnimatePresence>
            {isDropdownHovered && (
              <motion.div
                className="dropdown-content"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/projects/rabbitCageControl">Rabbit Cage Control & Management</Link>
                <Link to="/projects/test1">TEST</Link>
                <Link>More coming soon...</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile View */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* MOBILE MENU */}
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <button
                className="mobile-close-button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <hr />
              <strong>Projects</strong>
              <Link to="/projects/rabbitCageControl" onClick={() => setMobileMenuOpen(false)}>Rabbit Cage Control</Link>
              <Link to="/projects/test1" onClick={() => setMobileMenuOpen(false)}>TEST</Link>
            </motion.div>
          </>
        )}

      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
