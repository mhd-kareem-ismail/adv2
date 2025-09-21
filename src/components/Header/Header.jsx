import { useState } from 'react';
import { navLinks } from '../../data';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-banner">Admission is Open, Grab your seat now →</div>
      <nav className="navbar">
        <div className="logo">Little Learners</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a 
                href={link.href} 
                className={link.isButton ? 'contact-btn' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;