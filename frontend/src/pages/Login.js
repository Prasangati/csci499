import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../App.css";

function Login() {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLoginSubmit = (event) => {
       event.preventDefault();
       console.log("Logging in with:", { email, password });
       navigate("/login");
   };

   return (
       <div className="home-container">
           <div className="login-box">
               <img src="/logo.png" alt="Welcome Logo" className="welcome-image" />

               <form onSubmit={handleLoginSubmit} className="login-form">

               <div className="input-container">
                       <input
                           type="email" id="email" className="input-field" placeholder=" "
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                       />
                       <label htmlFor="email">Enter your email</label>
                   </div>


                   <label className="usernamepass">
                       <input type="password" placeholder="Enter your password" className="input-field"/>
                       {/* Login Button */}
                   </label>

                   <button type="submit" className="login-btn" >
                       Login
                   </button>
               </form>

               <div className="divider">
                   <span>OR</span>
               </div>

               <button className="google-btn">
                   <img src="/G.webp" alt="Google Logo" className="google-logo" />
                   Continue with Google
               </button>
               {/* Signup Link */}
               <p className="signup-text">
                   Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
               </p>
           </div>

           <p className="footer-text">React + Django Integration</p>
       </div>
   );
}

export default Login;
