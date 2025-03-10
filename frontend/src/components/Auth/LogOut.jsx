import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout endpoint on your backend.
      await axios.post(
        "http://localhost:8000/api/auth/logout/",
        {},
        { withCredentials: true }
      );
      // After a successful logout, redirect the user to the login page.
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="custom-google-btn">
      Logout
    </button>
  );
};

export default LogOut;