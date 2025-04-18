
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import RemindersPage from './pages/RemindersPage';
import CalculatorPage from './pages/CalculatorPage';
import GroupsPage from './pages/GroupsPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css';

const App = () => {
  // This would be replaced with actual auth state from Supabase
  const isAuthenticated = true;
  
  return (
    <Router>
      <div className="app">
        {isAuthenticated ? (
          <>
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/reminders" element={<RemindersPage />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/groups" element={<GroupsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
