import { useNavigate } from "react-router-dom";
import '../../index.css';
import './Contact.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



const Contact = () => {
    return (
      <>
        <Navbar />
  
        {/* Main content container */}
        <main id="main-content">
          <section id="contact-container">
            {/* Left side - Contact Form */}
            <div id="contact-form-container">
              <h1>Contact Us</h1>
              <form id = "contact-page-form">
                <label id = "contact-page-label">Email address *</label>
                <input id = "contact-page-input" type="email" placeholder="Enter your email" required />
  
                <label id = "contact-page-label">Reason for contacting *</label>
                <select id = "contact-page-select" required>
                  <option value="">Select a reason</option>
                  <option value="support">Customer Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="business">Business Inquiry</option>
                </select>
  
                <label id = "contact-page-label">Additional details *</label>
                <textarea id = "contact-page-textarea" placeholder="Enter your message" required></textarea>
  
                <label id = "contact-page-label" className="file-upload">
                  <input id = "contact-page-input" type="file" multiple />
                  
                </label>
  
                <button type="submit">Submit</button>
              </form>
            </div>
  
            {/* Right side - FAQ Section */}
            <div id="contact-message-container">
              <h2>Maybe one of these top FAQs can help:</h2>
              <ul>
                <li><a href="#">FAQ #1 </a></li>
                <li><a href="#">FAQ #2 </a></li>
                <li><a href="#">FAQ #3 </a></li>
                <li><a href="#">FAQ #4 </a></li>
                <li><a href="#">FAQ #5 </a></li>
              </ul>
              <a href="#" id="view-all-faqs">View All FAQs {'>>'} </a>
            </div>
          </section>
        </main>
  
        <Footer />
      </>
    );
  };
  
  export default Contact;