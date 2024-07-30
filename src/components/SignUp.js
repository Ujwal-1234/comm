import React, { useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username:username, password:password, email:email, phone:phone })
    });
    if (response.ok) {
      alert('Signup successful');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" p-6 text-slate-200 border-t-2 border-b-2 rounded-lg  w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mb-4 p-2 bg-inherit w-full border rounded"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="mb-4 bg-inherit p-2 w-full border rounded"
          />
        <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 p-2 bg-inherit w-full border rounded"
          />          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 p-2 w-full bg-inherit border rounded"
          />
          <button
            type="submit"
            className="bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
          >
            <FiUserPlus className="mr-2" /> Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link to="/signin" className="text-green-500 hover:underline">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;