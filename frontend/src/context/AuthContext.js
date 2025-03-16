import React, { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth'; // adjust the path as needed

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component that uses the useAuth hook.
export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};


// Custom hook to consume the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};
