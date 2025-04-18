
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHistory, FaBell, FaCalculator, FaUser, FaUserFriends } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Hisaab Kitaab</h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              <FaHome className="sidebar-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/history" className="sidebar-link">
              <FaHistory className="sidebar-icon" />
              <span>History</span>
            </Link>
          </li>
          <li>
            <Link to="/reminders" className="sidebar-link">
              <FaBell className="sidebar-icon" />
              <span>Reminders</span>
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="sidebar-link">
              <FaCalculator className="sidebar-icon" />
              <span>Calculator</span>
            </Link>
          </li>
          <li>
            <Link to="/groups" className="sidebar-link">
              <FaUserFriends className="sidebar-icon" />
              <span>Groups</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="sidebar-link">
              <FaUser className="sidebar-icon" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>© 2025 Hisaab Kitaab</p>
      </div>
    </div>
  );
};

export default Sidebar;
