import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} ASSESSA AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
