import React from "react";
import { GoogleLogin } from "@react-oauth/google"; //  Use GoogleLogin instead
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import styles
import "../App.css";

const Signup = () => {
    const navigate = useNavigate();

    const handleGoogleSuccess = async (response) => {
        console.log("🔹 Google OAuth Response:", response);

        try {
            if (!response.credential) {
                console.error(" No ID token received from Google");
                return;
            }

            // 🔹 Send the ID token to Django backend
            const res = await axios.post(
              "http://localhost:8000/api/auth/google-signup/",
              { token: response.credential },  // Changed field name
          {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
                }
             );

            console.log("✅ Signup successful:", res.data);
            navigate("/signup-success");
        } catch (error) {
            console.error(" Signup failed:", error.response?.data || error);
        }
    };

    return (
        <div id="home-container">
            <div className="signup-box">
                <img src="/logo.png" alt="Welcome Logo" className="welcome-image" />

                <form className="signup-form">
                    <label id="worknow1">Name:</label>
                    <input type="text" placeholder="What should we call you?" className="input-field" />

                    <label id="worknow2">Email:</label>
                    <input type="email" placeholder="Enter your email" className="input-field" />

                    <label id="worknow3">Password:</label>
                    <input type="password" placeholder="Create a password" className="input-field" />

                    <label id="worknow4">Confirm Password:</label>
                    <input type="password" placeholder="Create a password" className="input-field" />

                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>

                <div className="divider">
                    <span>OR</span>
                </div>

                {/*  Use GoogleLogin component instead of custom button */}
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => console.log(" Google Signup Failed")}
                />

                <p className="login-text">
                    Already have an account? <a href="/login" className="login-link">Login</a>
                </p>
            </div>

            <p className="footer-text">React + Django Integration</p>
        </div>
    );
};

export default Signup;
