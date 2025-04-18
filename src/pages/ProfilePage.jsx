
import React from 'react';
import Header from '../components/Header';
import './ProfilePage.css';
import { FaUser, FaEdit, FaSignOutAlt, FaBell, FaMoon, FaSun } from 'react-icons/fa';

const ProfilePage = () => {
  // This would come from Supabase once integrated
  const dummyUser = {
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
    joined: 'April 2025'
  };

  const dummyStats = {
    totalTransactions: 24,
    totalGroups: 2,
    totalLent: 5300,
    totalBorrowed: 3700
  };

  return (
    <div className="profile-page">
      <Header />
      
      <div className="profile-container">
        <div className="profile-section profile-info">
          <div className="profile-header">
            <div className="profile-avatar">
              {dummyUser.avatar ? (
                <img src={dummyUser.avatar} alt={dummyUser.name} />
              ) : (
                <FaUser className="default-avatar-icon" />
              )}
              
              <button className="edit-avatar-btn">
                <FaEdit />
              </button>
            </div>
            
            <div className="profile-details">
              <h1>{dummyUser.name}</h1>
              <p className="profile-joined">Member since {dummyUser.joined}</p>
              
              <div className="profile-contact">
                <div className="contact-item">
                  <label>Email</label>
                  <p>{dummyUser.email}</p>
                </div>
                
                <div className="contact-item">
                  <label>Phone</label>
                  <p>{dummyUser.phone}</p>
                </div>
              </div>
              
              <button className="edit-profile-btn">
                <FaEdit /> Edit Profile
              </button>
            </div>
          </div>
          
          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-value">{dummyStats.totalTransactions}</div>
              <div className="stat-label">Transactions</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value">{dummyStats.totalGroups}</div>
              <div className="stat-label">Groups</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value">₹{dummyStats.totalLent}</div>
              <div className="stat-label">Total Lent</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value">₹{dummyStats.totalBorrowed}</div>
              <div className="stat-label">Total Borrowed</div>
            </div>
          </div>
        </div>
        
        <div className="profile-section profile-settings">
          <h2 className="section-title">Settings</h2>
          
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-icon">
                <FaBell />
              </div>
              <div className="setting-content">
                <div className="setting-title">Notifications</div>
                <div className="setting-description">Manage reminder and transaction notifications</div>
              </div>
              <div className="setting-action">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-icon">
                <FaMoon />
              </div>
              <div className="setting-content">
                <div className="setting-title">Dark Mode</div>
                <div className="setting-description">Switch between light and dark themes</div>
              </div>
              <div className="setting-action">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-icon currency">
                ₹
              </div>
              <div className="setting-content">
                <div className="setting-title">Currency</div>
                <div className="setting-description">Set your preferred currency</div>
              </div>
              <div className="setting-action">
                <select className="currency-select">
                  <option value="INR">₹ INR</option>
                  <option value="USD">$ USD</option>
                  <option value="EUR">€ EUR</option>
                  <option value="GBP">£ GBP</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="logout-section">
            <button className="logout-btn">
              <FaSignOutAlt /> Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
