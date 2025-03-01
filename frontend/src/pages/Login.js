import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import styles
import "../App.css";

const Signup = () => {
    const navigate = useNavigate();

    // Handle Google OAuth login when the button is clicked
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            console.log("Google Login Response:", response); // 🔹 Debugging: Log response

            try {
                // Send the token to Django for signup
                const res = await axios.post(
                    "http://localhost:8000/auth/google-signup/",
                    { token: response.credential },
                    { withCredentials: true }
                );

                console.log("Backend Response:", res.data); // 🔹 Debugging: Log backend response

                navigate("/signup-success"); // Redirect to success page
            } catch (error) {
                console.error("Signup failed:", error.response?.data || error);
            }
        },
        onError: () => console.log("Google Signup Failed"),
    });

    return (
        <div className="home-container">
            <div className="signup-box">
                <img src="/logo.png" alt="Welcome Logo" className="welcome-image" />

                {/* Signup Form */}
                <form className="signup-form">
                    <input type="text" placeholder="First Name" className="input-field" />
                    <input type="text" placeholder="Last Name" className="input-field" />
                    <input type="email" placeholder="Enter your email" className="input-field" />
                    <input type="password" placeholder="Create a password" className="input-field" />

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="divider">
                    <span>OR</span>
                </div>

                {/* Custom Google Signup Button */}
                <button className="google-btn" onClick={() => login()}>
                    <img src="/G.webp" alt="Google Logo" className="google-logo" />
                    Continue with Google
                </button>

                {/* Redirect to login */}
                <p className="login-text">
                    Already have an account? <a href="/login" className="login-link">Login</a>
                </p>
            </div>

            <p className="footer-text">React + Django Integration</p>
        </div>
    );
};

export default Signup;
