// components/LogoutButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the import path if needed
import { handleLogout } from './LogoutHelper'; // Adjust the import path if needed

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Destructure logout function from AuthContext

  const handleClick = () => {
    handleLogout(logout, navigate);
  };

  return (
    <button
      type="button"
      className="bg-slate-800 shadow-lg w-full text-white rounded-lg p-2"
      onClick={handleClick}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
