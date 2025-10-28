


import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart3,
  ClipboardList,
  Star,
  Scale,
} from "lucide-react";
import {  Info, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/stats", label: "Stats", icon: BarChart3 },
    { path: "/whyus", label: "Why Us", icon: Star },
    { path: "/lawyers", label: "Lawyers", icon: Scale },
    { path: "/plans", label: "Plans", icon: ClipboardList },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm tracking-wide">IL</span>
            </div>
            <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              InfoLand Portal
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-indigo-500 shadow-md"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
