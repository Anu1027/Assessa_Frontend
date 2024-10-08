import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Pricing />
              <Contact />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;