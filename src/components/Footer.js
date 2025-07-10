import React from 'react';

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Sittipat Tapsutar • Crafted with ❤️ and React</p>
    <p>
      <span>Visit my </span>
      <a href="https://github.com/karnhao" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <span> | </span>
      <a href="linkedin.com/in/sittipat-tepsutar-8aa100335" target="_blank" rel="noopener noreferrer">
        Linkedin
      </a>
    </p>
  </footer>
);

export default Footer;
