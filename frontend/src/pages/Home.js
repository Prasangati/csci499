import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Home.css";
import "../App.css";

function Home() {
    const navigate = useNavigate(); // Hook for navigation

    const handleLoginClick = (event) => {
        event.preventDefault(); // Prevents page reload
        navigate("/login"); // Navigate to the Login page
    };

    return (
        <div className="home-container">
            <div className="login-box">
                {/* Logo (Smaller and Centered) */}

                {/* Login Form */}
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" className="input-field" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" className="input-field" />

                    {/* Login Button */}
                    <button type="submit" className="login-btn" onClick={handleLoginClick}>
                        Login
                    </button>
                </form>

                <div className="divider">
                    <span>OR</span>
                </div>

                {/* Google Login Button */}
                <button className="google-btn">
                    Continue with Google
                </button>

                {/* Signup Link */}
                <p className="signup-text">
                    Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
                </p>
            </div>

            {/* Footer */}
            <p className="footer-text">React + Django Integration</p>
        </div>
    );
}

export default Home;
