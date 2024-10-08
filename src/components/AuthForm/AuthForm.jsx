import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import logo from '../../assets/assessaai_logo2.png'; // Ensure path is correct
import './AuthForm.css'; // Custom CSS for styling

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="auth-box bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Assessa-AI Logo" className="h-16" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {isSignUp ? 'Sign Up to Assessa-AI' : 'Login to Assessa-AI'}
        </h2>

        <form>
          {isSignUp && (
            <>
              <div className="input-group mb-4">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                  required
                />
              </div>
              <div className="input-group mb-4">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                  required
                />
              </div>
            </>
          )}
          <div className="input-group mb-4">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              required
            />
          </div>
          <div className="input-group mb-4">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
              minLength={8}
            />
          </div>
          {isSignUp && (
            <div className="input-group mb-4">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Retype Password"
                className="input-field"
                required
                minLength={8}
              />
            </div>
          )}
          <button
            type="submit"
            className="auth-button w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition duration-300"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4">
          {isSignUp ? (
            <p className="text-gray-700">
              Already have an account?{' '}
              <span
                onClick={toggleForm}
                className="text-red-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          ) : (
            <p className="text-gray-700">
              Don’t have an account?{' '}
              <span
                onClick={toggleForm}
                className="text-red-600 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
