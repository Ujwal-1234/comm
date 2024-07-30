// logoutHelper.js

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the import path if needed

export const handleLogout = async (logout, navigate) => {
  try {
    // Call the backend API to log out
    await fetch('http://localhost:3000/api/auth/logout', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    // Remove token from local storage
    localStorage.removeItem('token');
    // Update authentication state
    logout();
    // Redirect to signin page
    navigate('/signin');
  } catch (error) {
    console.error('Failed to log out:', error);
  }
};
