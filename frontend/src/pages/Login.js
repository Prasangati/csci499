import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import useGoogleSuccess from "../hooks/useGoogleSuccess";
import { useAuthContext } from "../context/AuthContext";
import "./Login.css";
import "../App.css";

function Login() {
  const handleGoogleSuccess = useGoogleSuccess();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthContext(); // Get auth state from context

  // Local state for form data and UI state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Store error messages
  const [loadingLocal, setLoadingLocal] = useState(false); // For preventing multiple requests
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState(""); // Store reset email
  const [resetMessage, setResetMessage] = useState(""); // Store reset success/error message

  // If authentication status is determined and the user is authenticated, redirect to the dashboard
  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/");
    }
  }, [loading, isAuthenticated, navigate]);

  // Optional: Show a loading indicator while checking auth state
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setError("");

    // Regular Expression to Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoadingLocal(true);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login/`, { email, password })
      .then(() => navigate("/dashboard"))
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            setError("Invalid email or password. Please try again.");
          } else {
            setError("Something went wrong. Please try again later.");
          }
        } else {
          setError("Network error. Please check your internet connection.");
        }
      })
      .finally(() => setLoadingLocal(false));
  };

  // Function for handling password reset
  const handleResetPassword = () => {
    setResetMessage("");

    if (!resetEmail) {
      setResetMessage("Please enter your email.");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/password-reset/`, { email: resetEmail })
      .then(() => {
        setResetMessage("A reset link has been sent to your email.");
        setTimeout(() => setIsModalOpen(false), 2000); // Close the modal after successful reset
      })
      .catch(() => setResetMessage("Failed to send reset email. Please try again."));
  };

  return (
    <div id="home-container">
      <div className="login-box">
        <img src="/logo.png" alt="Welcome Logo" className="welcome-image" />

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Email/Password Login Form */}
        <form onSubmit={handleLoginSubmit} className="login-form">
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

          <button type="submit" className="login-btn" disabled={loadingLocal}>
            {loadingLocal ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Google Login */}
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "100%",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("❌ Google Signup Failed")}
          />
        </div>

        {/* Sign Up Link */}
        <p className="signup-text" id="movemessage">
          Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
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

            <button className="reset-btn" onClick={handleResetPassword}>
              Get Reset Link
            </button>
            <p className="reset-message">{resetMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
