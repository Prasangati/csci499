import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Signup.css";
import CustomGoogleButton from "../components/Auth/CustomGoogleButton";

const Signup = () => {
    const navigate = useNavigate();

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

                <form className="signup-form">


                    <div className="input-container">
                        <input type="text" placeholder=" " className="input-field" id="name" required/>
                        <label htmlFor="name">Name</label>
                    </div>

                    {/* email input box */}
                    <div className="input-container">
                        <input type="email" placeholder=" " className="input-field" id="email" required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    {/* pw input box */}
                    <div className="input-container">
                        <input type="password" placeholder=" " className="input-field" id="password" required/>
                        <label htmlFor="password">Password</label>
                    </div>

                    {/* confirm pw */}
                    <div className="input-container">
                        <input type="password" placeholder=" " className="input-field" id="confirm-password" required/>
                        <label htmlFor="confirm-password">Confirm Password</label>
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
