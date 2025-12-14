import React from 'react'
import { useState } from 'react';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (<nav className="bg-blue-600 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="text-xl  text-white">
            PPM Tool
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-blue-300 hover:text-blue-200">Dashboard</a>
          </div>
        
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-blue-300 hover:text-blue-200">Sign Up</a>
            <a href="#" className="text-blue-300 hover:text-blue-200">Login</a>
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
          <a className="block px-4 py-2 hover:bg-gray-100" href="#">Dashboard</a>
          <a className="block px-4 py-2 hover:bg-gray-100" href="#">Sign Up</a>
          <a className="block px-4 py-2 hover:bg-gray-100" href="#">Login</a>
        </div>
      )}
    </nav>
  );
}

