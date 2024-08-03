import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>My Pages</h2>
          <div className="footer-social">
            <span>Connect</span>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/write-post">Write Post</Link></li>
            <li><Link to="/all-posts">All Posts</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/legal-policy">Legal Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
        <div className="footer-section feedback-section">
          <h3>Feedback</h3>
          <form>
            <input type="text" placeholder="Line 1" />
            <input type="text" placeholder="Line 1" />
            <textarea placeholder="Some example text that's free-flowing within the dropdown menu. And this is more example text."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 MyPages. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
