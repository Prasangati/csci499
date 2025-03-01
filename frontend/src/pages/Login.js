import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Login.css";




    function Login() {
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
     
     
        const handleLoginSubmit = (event) => {
            event.preventDefault();
            console.log("Logging in with:", { email, password });
            navigate("/dashboard"); // Redirect after login
        };
     



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
            <div className="Login-box">
                <img src="/logo.png" alt="Welcome Logo" className="welcome-image" />







                {/* Divider */}
                <div className="divider">
                    <span>OR</span>
                </div>



                {/* Custom Google Signup Button */}
                <button className="google-btn" onClick={() => login()}>
                    <img src="/G.webp" alt="Google Logo" className="google-logo" />
                    Continue with Google
                </button>

                {/* Redirect to signup */}
                <p className="signup-text">
                    Do not have an account yet? <a href="/signup" className="signup-link">Sign up</a>
                </p>
            </div>

        </div>
    );
};

export default Login;
