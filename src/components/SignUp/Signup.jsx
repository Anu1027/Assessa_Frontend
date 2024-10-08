import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/assessaai_logo2.png'; // Correct logo import
import './Signup.css'; // CSS for styling

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState(''); // Change email to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle any errors
  const navigate = useNavigate(); // For navigation after signup

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const response = await fetch('http://localhost:8000/api/users/signup/', { // Updated URL to match your Django route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        full_name: fullName,
        username: username, // Send username instead of email
        password: password,
      }),
    });

    if (response.ok) {
      // Handle successful signup
      const data = await response.json();
      console.log('Signup successful:', data);
      navigate('/login'); // Redirect to login page after signup
    } else {
      // Handle errors
      const errorData = await response.json();
      setError(errorData.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      {/* Logo Section */}
      <div className="logo-container mb-4 flex justify-center">
        <img src={logo} alt="ASSESSA AI Logo" className="h-12" />
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

      {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}

      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} // Update state on input change
            required // Ensure the field is required
          />
        </div>
        <div className="mb-4">
          <input
            type="text" // Change type to text for username
            placeholder="Username" // Update placeholder
            className="input-field"
            value={username} // Use username state
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
            required // Ensure the field is required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            required // Ensure the field is required
          />
        </div>
        <button type="submit" className="btn-primary w-full">Sign Up</button>
      </form>

      <p className="text-center mt-4">
        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
