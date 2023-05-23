import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;