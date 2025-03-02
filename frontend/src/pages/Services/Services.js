import { useNavigate } from "react-router-dom";
import '../../index.css';
import './Services.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



const Services = () => {
    return (
      <>
        <Navbar />
  
        {/* Main content container */}
        <main id="services-main-content">
          <section id="services-container">
            <div id = "services-title">Services Page</div>
            
          </section>
        </main>
  
        <Footer />
      </>
    );
  };
  
  export default Services;