import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Combined user state (includes name, email, etc.)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await axios.get("http://localhost:8000/api/auth/me/", { withCredentials: true });
        if (res.data.isAuthenticated) {
          setIsAuthenticated(true);
          setUser(res.data.user); // Assumes your backend returns the user info in res.data.user
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (err) {
        setError(err);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  return { isAuthenticated, user, loading, error };
};

export default useAuth;
