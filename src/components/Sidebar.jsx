import React, { useState, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import {
  FaGithub, FaLinkedin, FaWhatsapp,
  FaBriefcase, FaTags, FaFileAlt, FaBlog,
  FaEnvelope, FaEllipsisH
} from 'react-icons/fa';

import img7 from '../assets/imges/usman.jpg';
import { ThemeContext } from '../context/ThemeProvider';

const Sidebar = () => {
  const { mode, setMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');
  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleNavigate = (path) => navigate(path);

  const navItems = [
    { label: 'Portfolio', path: '/portfolio', icon: <FaBriefcase /> },
    { label: 'Services & Pricing', path: '/services', icon: <FaTags /> },
    { label: 'Resume', path: '/resume', icon: <FaFileAlt /> },
    { label: 'Blog', path: '/blog', icon: <FaBlog /> },
    { label: 'Contact', path: '/contact', icon: <FaEnvelope /> },
    { label: 'Client Overview', path: '/More', icon: <FaEllipsisH /> },
  ];

  return (
    <>
      {/* Toggle for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-green-700 text-white lg:hidden shadow-md"
      >
        <HiOutlineMenuAlt3 className="text-2xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 p-5 flex flex-col overflow-y-auto transition-transform duration-300 z-40 ease-in-out
        ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800 shadow-lg'}
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="text-center mb-6">
          <Link to="/">
            <img
              src={img7}
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto border-4 border-green-600 shadow-md"
            />
          </Link>
          <h2 className="text-xl font-bold mt-4">Muhammad Usman</h2>
          <p className="text-sm mt-2 text-gray-400">
            Senior Software Engineer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-2 mb-6">
          <a href="https://github.com/HAFIZMUHAMMADUSMANZAHOOR" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl hover:text-green-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/hafiz-muhammad-usman-zahoor-0400b4262" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl hover:text-green-500 transition" />
          </a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-xl hover:text-green-500 transition" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 flex-grow">
          {navItems.map(({ label, path, icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition
                ${isActive ? 'bg-green-600 text-white' : 'hover:bg-green-100 hover:text-green-700 dark:hover:bg-green-800 dark:hover:text-white'}`
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="mt-8 space-y-4">
          <button
            onClick={() => handleNavigate('/contact')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition"
          >
            🚀 Hire Me
          </button>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm">{mode === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={mode === 'dark'}
                onChange={toggleMode}
              />
              <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full peer dark:peer-checked:bg-green-600 peer-focus:ring-2 ring-green-400 transition">
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${mode === 'dark' ? 'translate-x-5' : ''}`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
