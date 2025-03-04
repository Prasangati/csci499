import { useGoogleLogin } from '@react-oauth/google';

const CustomGoogleButton = () => {
  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/google-signup/",
        {
          access_token: tokenResponse.access_token  // Changed field name
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      navigate("/signup-success");
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
  });

  return (
    <button onClick={login} className="custom-google-btn">
      Sign Up with Google
    </button>
  );
};

default export CustomGoogleButton;