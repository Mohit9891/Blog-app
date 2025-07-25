import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 mt-12 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left Side - Brand */}
        <div className="text-lg font-semibold">
          © 2025 Thoughts Inc.
        </div>

        {/* Center - Navigation Links */}
        <div className="space-x-6">
          <a href="/" className="hover:text-amber-400">Home</a>
          <a href="/about" className="hover:text-amber-400">About</a>
          <a href="/contact" className="hover:text-amber-400">Contact</a>
        </div>

        {/* Right Side - Socials or Email */}
        <div>
          <a href="mailto:contact@thoughts.com" className="text-sm hover:text-amber-400">
            contact@thoughts.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
