
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';
import { FaGoogle, FaApple, FaInstagram } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="app-name">Hisaab Kitaab</h1>
          <p className="app-tagline">Track expenses, loans & settlements with friends</p>
        </div>
        
        <div className="auth-form">
          <h2>Log In</h2>
          
          <div className="social-login">
            <button className="social-btn google">
              <FaGoogle /> Continue with Google
            </button>
            
            <button className="social-btn apple">
              <FaApple /> Continue with Apple
            </button>
            
            <button className="social-btn instagram">
              <FaInstagram /> Continue with Instagram
            </button>
          </div>
          
          <div className="divider">
            <span>or</span>
          </div>
          
          <form>
            <div className="form-group">
              <label htmlFor="email">Email or Phone</label>
              <input 
                type="text" 
                id="email" 
                placeholder="Enter your email or phone"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password"
              />
            </div>
            
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            
            <button type="submit" className="auth-submit">
              Log In
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="auth-graphic">
        <div className="auth-feature">
          <h2>Smart Expense Tracking</h2>
          <ul>
            <li>Keep track of shared expenses</li>
            <li>Send and receive payment reminders</li>
            <li>Manage groups for trips, events, and roommates</li>
            <li>Review transparent transaction history</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
