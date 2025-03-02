import { useNavigate } from 'react-router-dom';
import '../../index.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header id="header">
      <div id="header-logo">
        <img src="/logo.png" alt="Spoons-Logo" className="spoons-logo" />
      </div>

      <nav id="nav-links">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact/Support</a>
        
      </nav>

      <div id="button-container">
        <button id="nav-button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button id="nav-button" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
