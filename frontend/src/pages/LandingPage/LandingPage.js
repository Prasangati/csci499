import { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import '../../index.css';
import './LandingPage.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const LandingPage = () => {
  const navigate = useNavigate(); 

  return (
    <>
    <Navbar />

    {/* Main content*/}
    <main id="landing-container">
        {/* Left Section: Text + CTA */}
        <section id="landing-text">
          <h1>Transform the Way You Journal</h1>
          <p>
            Spoons is your AI-powered mental health companion. Gain insights,
            track emotions, and receive personalized feedback on your journal
            entries.
          </p>
          <div id="landing-buttons">
            <button className="cta-button primary" onClick={() => navigate('/signup')}>Get Started</button>
            <button className="cta-button secondary" onClick={() => navigate('/services')}>Learn More</button>
          </div>
        </section>

        {/* Right Section: App Preview (Placeholder) */}
        <section id="landing-image">
          <div className="image-placeholder">
            <p>App Preview Coming Soon</p>
          </div>
        </section>
      </main>

    <Footer />
  </>
  );
};

export default LandingPage;