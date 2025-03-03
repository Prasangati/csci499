import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const initializeGoogleSignIn = () => {
            if (window.google) return;

            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                window.google.accounts.id.initialize({
                    client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
                    callback: handleGoogleSuccess
                });
            };
            document.head.appendChild(script);
        };

        initializeGoogleSignIn();
    }, []);

    const handleGoogleLogin = () => {
        window.google.accounts.id.prompt(notification => {
            if (notification.isNotDisplayed() || notification.isSkipped()) {
                console.log('Popup blocked/skipped');
            }
        });
    };

    const handleGoogleSuccess = async (response) => {
        try {
            const res = await axios.post(
                'http://localhost:8000/api/auth/google-signup/',
                { token: response.credential },
                { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
            );
            res.data.user && navigate('/dashboard');
        } catch (error) {
            console.error('Signup failed:', error.response?.data || error);
        }
    };

    return (
        <button className="google-btn" onClick={handleGoogleLogin}>
            <img src="/G.webp" alt="Google Logo" className="google-logo" />
            Sign Up With Google
        </button>
    );
};

export default GoogleSignIn;