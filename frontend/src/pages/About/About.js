import { useNavigate } from "react-router-dom";
import '../../index.css';
import './About.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



const About = () => {
    return (
      <>
        <Navbar />
  
        {/* Main content container */}
        <main id="about-main-content">
          <section id="about-container">
            <div id = "about-title">Meet the Team</div>
            <div id = "about-paragraph">
                Spoons was founded by Raitah, Prasanga, Malak, and Ryan, a team of passionate developers and mental health advocates who saw the need for a more accessible, AI-driven journaling experience.
                <br></br> <br></br>
                Our journey began with a simple idea: What if journaling could be more than just writing down thoughts? What if it could provide meaningful insights, support, and guidance—without the barriers of cost or accessibility? Inspired by the power of AI and mental wellness, we built Spoons, an AI-powered mental health companion designed to help users reflect, grow, and gain feedback on their thoughts.
                <br></br> <br></br>
                Using artificial intelligence, Spoons offers personalized AI-driven feedback on journal entries, helping users recognize patterns in their emotions, identify potential stressors, and find encouragement in their journey toward better mental health. Our mission is to make self-reflection intuitive, private, and insightful, ensuring that everyone has a safe space to express themselves.                
                <br></br> <br></br> 
                At Spoons, we believe that mental wellness should be accessible to all—not just a luxury, but a daily habit. Whether you're navigating life's challenges or just need a place to clear your mind, our AI-powered journaling tool is here to guide and support you, one entry at a time.
            </div>
          </section>
        </main>
  
        <Footer />
      </>
    );
  };
  
  export default About;