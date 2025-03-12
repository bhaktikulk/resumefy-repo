import React from 'react';
import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import resumefyLogo from '../Components/Nav/resumefy-logo.png'; // Update the path as needed

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-row">
        
        {/* Resumefy Section */}
        <div className="footer-col footer-resumefy">
          <img src={resumefyLogo} alt="Resumefy Logo" />
          <p>Create professional resumes and CVs with ease using Resumefy.</p>
          <a href="/login" className="create-resume-btn">Create My Resume</a>
        </div>

        {/* Company Section */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div className="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Payment Options</a></li>
          </ul>
        </div>

        {/* Resume & CV Section */}
        <div className="footer-col">
          <h4>Resume & CV</h4>
          <ul>
            <li><a href="#">Resume Builder</a></li>
            <li><a href="#">Resume Templates</a></li>
            <li><a href="#">Resume Examples</a></li>
            <li><a href="#">Resume Format</a></li>
            <li><a href="#">CV Builder</a></li>
            <li><a href="#">CV Templates</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">&copy; 2025 Numetry Technologies. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
