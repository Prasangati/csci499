import React from "react";
import { useNavigate } from "react-router-dom";

const SignupSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="success-container">
            <div className="success-box">
                <img src="/success-icon.png" alt="Success" className="success-icon" />
                <h1>Signup Successful!</h1>
                <p>Welcome to our platform. You can now log in and start using our services.</p>

                <button className="success-btn" onClick={() => navigate("/login")}>
                    Go to Login
                </button>

                <button className="home-btn" onClick={() => navigate("/")}>
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default SignupSuccess;
