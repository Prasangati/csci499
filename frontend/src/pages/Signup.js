import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Signup.css";
//import CustomGoogleButton from "../components/Auth/CustomGoogleButton";




    const Signup = () => {
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        const [error, setError] = useState("");
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        };
        
        const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
        const isValidPassword = (password) => password.length >= 8;

        const handleSignupSubmit = async (e) => {
            e.preventDefault();
            setError(""); 
    
            const { name, email, password, confirmPassword } = formData;
    
            // user inputs validation
            if (!name.trim()) {
                setError("Name is required.");
                return;
            }
            if (!isValidEmail(email)) {
                setError("Enter a valid email address.");
                return;
            }
            if (!isValidPassword(password)) {
                setError("Password must be at least 8 characters long.");
                return;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }
            try {
                const response = await axios.post(
                    `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup/`,
                    { name, email, password },
                    { withCredentials: true, headers: { "Content-Type": "application/json" } }
                );
    
                console.log(" Signup successful:", response.data);
                navigate("/signup-success");
            } catch (error) {
                console.error("Signup failed:", error.response?.data || error);
                setError(error.response?.data?.message || "Signup failed. Please try again.");
            }
        };
    

    const handleGoogleSuccess = async (response) => {
        console.log("🔹 Google OAuth Response:", response);

        try {
            if (!response.credential) {
                console.error(" No ID token received from Google");
                return;
            }
            const res = await axios.post(
              "http://localhost:8000/api/auth/google-signup/",
              { token: response.credential },  // Changed field name
          {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
                }
             );

            console.log(" Signup successful:", res.data);
            navigate("/signup-success");
        } catch (error) {
            console.error(" Signup failed:", error.response?.data || error);
        }
    };


    return (
        <div id="home-container">
            <div className="signup-box">
                <img src="/logo.png" alt="Welcome Logo" className="welcome-image"/>

                <form className="signup-form" onSubmit={handleSignupSubmit}>
                {error && <p className="error-message">{error}</p>}

                <div className="input-container">
                        <input
                            type="text"
                            placeholder=" "
                            className="input-field"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                          <label htmlFor="name">Name</label>
                          </div>
        

                    {/* email input box */}
                    <div className="input-container">
                        <input
                            type="email"
                            placeholder=" "
                            className="input-field"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    {/* pw input box */}
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder=" "
                            className="input-field"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    {/* confirm pw */}
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder=" "
                            className="input-field"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>

                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>

                <div className="divider">
                    <span>OR</span>
                </div>

                {/* ✅ Use GoogleLogin component instead of custom button */}
                <div
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "100%",  // Adjust height as needed
                        borderRadius: "4px",  // Optional: for rounded corners
                        overflow: "hidden"  // Ensures child components stay within bounds
                    }}
                >
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => console.log("❌ Google Signup Failed")}
                    />
                </div>

                <p className="login-text">
                    Already have an account? <a href="/login" className="login-link">Login</a>
                </p>
            </div>

        </div>
    );
};

export default Signup;
