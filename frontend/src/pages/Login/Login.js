import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./Login.css";
import "../../App.css";




    function Login() {
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState(""); //store error messages
        const [loading, setLoading] = useState(false); // for preventing multiple requests

        const [isModalOpen, setIsModalOpen] = useState(false);

    const [resetEmail, setResetEmail] = useState(""); // Store reset email
    const [resetMessage, setResetMessage] = useState(""); // Store reset success/error message

    const handleForgotPassword = () => {
       setIsModalOpen(true);
 
    };
    
     
        const handleLoginSubmit = (event) => {
            event.preventDefault();
            setError(""); 
            setLoading(true); 
            console.log("Logging in with:", { email, password });

    
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login/`, { email, password })
                .then((res) => {
                    console.log("Login Success:", res.data);
                    navigate("/dashboard"); // Redirect after successful login
                })
                .catch((error) => {
                    setError("Invalid email or password. Please try again.");
                    console.error("Login failed:", error.response?.data || error);
                })
                .finally(() => setLoading(false));
        };

        //fucntion for handling pwReset
        const handleResetPassword = () => {
            if (!resetEmail) {
                setResetMessage("Please enter your email.");
                return;
            }
        
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/password-reset/`, { email: resetEmail })
                .then(() => {
                    setResetMessage("A reset link has been sent to your email.");
                })
                .catch((error) => {
                    setResetMessage("Failed to send reset email. Please try again.");
                    console.error("Reset failed:", error.response?.data || error);
                });
        };
        
    // Handle Google OAuth login when the button is clicked
    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            console.log("Google Login Response:", response);
    
            try {
                // Send Google token to backend
                const res = await axios.post(
                    `${process.env.REACT_APP_BACKEND_URL}/auth/google-signup/`,

                    { access_token: response.access_token }, 
                    { withCredentials: true }
                );
    
                console.log("Google Login Success:", res.data);
                navigate("/dashboard"); // Redirect after Google login
            } catch (error) {
                console.error("Google login failed:", error.response?.data || error);
            }
        },
        onError: () => console.log("Google Signup Failed"),
    });
    


    return (
        <div className="home-container">
            <div className="login-box">
                <img src="/logo.png" alt="Welcome Logo" className="welcome-image" />
                
                {/* Error Message */}
                {error && <p className="error-message">{error}</p>}


                {/* Email/Password Login Form */}
                <form onSubmit={handleLoginSubmit} className="login-form">
                    {/* Email Field */}
                    <div className="input-container">
                        <input
                            type="email"
                            id="email"
                            className="input-field"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email address</label>
                    </div>

                    {/* Password Field */}
                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            className="input-field"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <p className="forgot-password" onClick={handleForgotPassword}>
    Forgot Password?
</p>

     {/* Login Button */}
     <button type="submit" className="login-btn">
                       Login
                   </button>
                   </form>
                {/* Divider */}
                <div className="divider">
                    <span>OR</span>
                </div>



                {/* Google Signup Button */}
                <button className="google-btn" onClick={() => googleLogin()}>
    <img src="/G.webp" alt="Google Logo" className="google-logo" />
    Continue with Google
</button>




       {/* dont have an account- Signup Button */}
                <p className="signup-text">
                   Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
               </p>
                </div>


                {isModalOpen && (
               <div className="modal">
                   <div className="modal-content">
                       <button className="close" onClick={() => setIsModalOpen(false)}>&times;</button>
                       <h2>Forgot Password?</h2>
                       <p>Enter your email below and we'll send you a link to reset your password.</p>


                       <div className="input-container">
                           <input
                               type="email"
                               id="reset-email"
                               className="input-field"
                               placeholder=" "
                               value={resetEmail}
                               onChange={(e) => setResetEmail(e.target.value)}
                               required
                           />
                           <label htmlFor="reset-email">Email address</label>
                       </div>


                       <button className="reset-btn" onClick={handleResetPassword}>Get Reset Link</button>
                       <p className="reset-message">{resetMessage}</p>
                   </div>
              
                   </div>
                )}


            </div>
    );
}

export default Login;