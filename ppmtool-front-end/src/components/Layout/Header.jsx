import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-600 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
            <a className="text-xl  text-white" href="Dashboard.html">
                PPM Tool
            </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-blue-300 hover:text-blue-200">Dashboard</Link>
          </div>
        
          <div className="hidden md:flex space-x-4">
            <a href="register.html" className="text-blue-300 hover:text-blue-200">Sign Up</a>
            <a href="login.html" className="text-blue-300 hover:text-blue-200">Login</a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <a className="block px-4 py-2 hover:bg-gray-100" href="/dashboard">Dashboard</a>
          <a className="block px-4 py-2 hover:bg-gray-100" href="register.html">Sign Up</a>
          <a className="block px-4 py-2 hover:bg-gray-100" href="login.html">Login</a>
        </div>
      )}
    </nav>
  );
}

