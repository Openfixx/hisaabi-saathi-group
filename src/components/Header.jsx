
import React from 'react';
import './Header.css';
import { FaBell, FaSearch } from 'react-icons/fa';

const Header = () => {
  // This would be replaced with actual user data from Supabase later
  const dummyUser = {
    name: 'Rahul',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop'
  };

  return (
    <header className="header">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search transactions, users or groups..."
          className="search-input"
        />
      </div>
      
      <div className="header-right">
        <div className="notifications">
          <FaBell className="notification-icon" />
          <span className="notification-badge">3</span>
        </div>
        
        <div className="user-profile">
          <img 
            src={dummyUser.avatar} 
            alt={dummyUser.name} 
            className="user-avatar" 
          />
          <span className="user-name">{dummyUser.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
