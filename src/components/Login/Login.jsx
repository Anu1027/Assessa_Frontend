import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/assessaai_logo2.png'; // Correct logo import
import './Login.css'; // CSS for styling
import axios from 'axios'; // Make sure to install axios if not already installed

const Login = () => {
  const [username, setUsername] = useState(''); // Change email to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle login errors
  const navigate = useNavigate(); // For programmatic navigation

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post('http://localhost:8000/api/users/login/', { // Updated URL to match your Django route
        username, // Send username instead of email
        password,
      });

      // Assuming your backend sends back a token
      const { token } = response.data;

      // Store the token (e.g., in local storage or state management)
      localStorage.setItem('token', token);

      // Redirect to another page after successful login
      navigate('/dashboard'); // Replace '/dashboard' with your desired path

    } catch (err) {
      // Handle errors (e.g., display a message)
      setError('Invalid username or password. Please try again.'); // Updated error message
    }
  };

  return (
    <div className="auth-container">
      {/* Logo Section */}
      <div className="logo-container mb-4 flex justify-center">
        <img src={logo} alt="ASSESSA AI Logo" className="h-12" />
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      {error && <p className="text-red-600 text-center">{error}</p>} {/* Error message */}

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <input
            type="text" // Change type to text for username
            placeholder="Username" // Update placeholder
            className="input-field"
            value={username} // Update value to username
            onChange={(e) => setUsername(e.target.value)} // Update username state
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
        </div>
        <button type="submit" className="btn-primary w-full">Login</button>
      </form>

      <p className="text-center mt-4">
        Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
