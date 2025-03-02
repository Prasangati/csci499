import '../../index.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact/Support</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2025 Spoons. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
