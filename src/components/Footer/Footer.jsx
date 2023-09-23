// Footer.js
import "./Footer.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@chuochaususinaurembosakina.ac.tz</p>
          <p>Phone: +255 752 566 508</p>
          <p>Phone: +255 689 168 775</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="#_" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#_" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#_" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Chuo cha Ususi na Urembo Sakina. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
