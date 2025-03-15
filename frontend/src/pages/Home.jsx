import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "../components/Auth/LogOut";
import { useAuthContext } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated, loading, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]); // redirect logged-in users to dashboard

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome, {user?.first_name || "User"}!</h1>
        <LogOut />
        {/* Additional authenticated content */}
      </div>
    );
  } else {
    return (
      <div>
        <h2>You are not logged in.</h2>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }
}

