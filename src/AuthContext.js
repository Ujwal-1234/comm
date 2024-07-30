import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token on initialization
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally, validate the token here by making an API call
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []); // Empty dependency array means this effect runs only once

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token'); // Also clear the token from local storage
  };

  return (
    <AuthContext.Provider value={{ isAuth: isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
