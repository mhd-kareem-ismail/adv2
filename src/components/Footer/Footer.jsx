import { footerLinks } from '../../data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col footer-about">
          <div className="footer-logo">Little Learners</div>
          <p>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className="contact-info">
            <p>✉️ hello@littlelearners.com</p>
            <p>📞 +91 91813 23 2309</p>
            <p>📍 Somewhere in the World</p>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Home</h4>
          <ul>
            {footerLinks.home.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>About Us</h4>
          <ul>
            {footerLinks.aboutUs.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Academics</h4>
          <ul>
            {footerLinks.academics.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            {footerLinks.contact.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a> |
          <a href="#">Cookie Policy</a>
        </div>
        <div className="social-icons">
          <a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="path/to/linkedin-icon.png" alt="LinkedIn" /></a>
        </div>
      </div>

      <div className="copyright">
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;