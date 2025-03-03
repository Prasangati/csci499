import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GoogleSignInButton = () => {
  const navigate = useNavigate();

  // Proper success handler
  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/google-signup/',
        { token: tokenResponse.access_token }, // ✅ Use access_token
        { withCredentials: true }
      );
      res.data.user && navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error);
    }
  };

  // Initialize Google Login
  const login = useGoogleLogin({
    onSuccess: handleGoogleSuccess, // ✅ Direct reference
    onError: () => console.log('Login Failed'),
    clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com' // ✅ Required
  });

  return (
    <button className="google-btn" onClick={login}>
      <img src="/G.webp" alt="Google Logo" className="google-logo" />
      Sign Up With Google
    </button>
  );
};
export default GoogleSignInButton;