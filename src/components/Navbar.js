import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const projectLinks = [
  { to: '/projects/rabbitCageControl', label: 'Rabbit Cage Control & Management' },
  { to: '/projects/test1', label: 'TEST' },
  { to: '', label: 'More coming soon...', disabled: true },
];

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
        {mainLinks.map(link => (
          <Link key={link.to} to={link.to}>{link.label}</Link>
        ))}

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
                {projectLinks.map(link =>
                  link.disabled ? (
                    
                    <Link>{link.label}</Link>
                  ) : (
                    <Link key={link.to} to={link.to}>{link.label}</Link>
                  )
                )}
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
              {mainLinks.map(link => (
                <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <hr />
              <strong>Projects</strong>
              {projectLinks.map(link =>
                link.disabled ? (
                  <span key={link.label} style={{ opacity: 0.5 }}>{link.label}</span>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
