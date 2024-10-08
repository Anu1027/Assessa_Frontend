import React from 'react';
import './Hero.css'; // Import the CSS for styling
import heroImage from '../../assets/heroimg.jpg'; // Import the hero image

const Hero = () => {
  return (
    <section
      className="hero"
      id="home" // Add this id to match the Link to="home" in your Navbar
      style={{
        backgroundImage: `url(${heroImage})`, // Use the imported image here
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Empower Your Learning Journey</h1>
        <p className="hero-text">
          Take control of your education with personalized, AI-powered assessments.
          Get instant feedback and insights to improve your skills and knowledge.
        </p>
        <a href="/start" className="cta-button">Start Your Free Assessment</a>
      </div>
    </section>
  );
};

export default Hero;
