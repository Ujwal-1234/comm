import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { FiLogIn } from 'react-icons/fi';
import { setAuthToken } from '../service/apiservice';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuth } = useAuth(); // Make sure isAuth is included if used
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) { // Check if user is already authenticated
      navigate('/');
    }
  }, [isAuth, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password: password })
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        login(); // Assuming login function sets the auth state
        navigate('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Failed to fetch:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" text-slate-200 p-6 rounded-lg border-t-2 border-b-2  w-full max-w-md">
        <h2 className="text-2xl  mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mb-4 p-2 w-full bg-inherit border rounded"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 p-2 bg-inherit w-full border rounded"
          />
          <button
            type="submit"
            className="bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
          >
            <FiLogIn className="mr-2" /> Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account? <Link to="/signup" className="text-green-500 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
