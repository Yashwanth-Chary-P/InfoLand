import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-govt-green to-private-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IL</span>
            </div>
            <span className="text-xl font-bold text-dark-gray">InfoLand</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/') 
                  ? 'bg-govt-green bg-opacity-10 text-govt-green' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              Land Grid
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/about') 
                  ? 'bg-govt-green bg-opacity-10 text-govt-green' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              Contact
            </button>
            <button className="px-6 py-2 bg-govt-green text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
