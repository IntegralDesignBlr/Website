import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="INTEGRAL" />
        <span>INTEGRAL DESIGN</span>
      </div>
      <div className="nav-links">
        <NavLink to="/"       className="nav-link">Home</NavLink>
        <NavLink to="/about"  className="nav-link">About</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/team"   className="nav-link">Team</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}
