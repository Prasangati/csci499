import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import LandingPage from "./pages/LandingPage/LandingPage"
import SignupSuccess from "./pages/SignupSucess"
const clientId = "974911060543-6gsff2mmv7jfakgap4i71rpip850mso7.apps.googleusercontent.com"; // Replace with actual Client ID

function App() {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Router>
                <Routes>
                    <Route path="" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup-success" element={<SignupSuccess />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} /> {/* Catch-all for unknown routes */}
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;
