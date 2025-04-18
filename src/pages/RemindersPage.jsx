
import React from 'react';
import Header from '../components/Header';
import ReminderCard from '../components/ReminderCard';
import './RemindersPage.css';
import { FaPlus } from 'react-icons/fa';

const RemindersPage = () => {
  // This would come from Supabase once integrated
  const dummyReminders = [
    {
      id: 1,
      from: 'Aarav',
      to: 'You',
      amount: 500,
      message: 'Please pay for the dinner we had at Urban Cafe last week.',
      date: '18 Apr, 2025'
    },
    {
      id: 2,
      from: 'Priya',
      to: 'You',
      amount: 1200,
      message: 'Don\'t forget about the movie tickets from last weekend!',
      date: '15 Apr, 2025'
    }
  ];

  // Reminders I've sent to others
  const dummySentReminders = [
    {
      id: 3,
      from: 'You',
      to: 'Vikram',
      amount: 250,
      message: 'For the coffee and snacks last Monday.',
      date: '12 Apr, 2025'
    }
  ];

  return (
    <div className="reminders-page">
      <Header />
      
      <div className="reminders-header">
        <h1>Reminders</h1>
        <button className="new-reminder-btn">
          <FaPlus /> Send Reminder
        </button>
      </div>
      
      <div className="reminders-section">
        <h2>Reminders You Received</h2>
        
        <div className="reminders-list">
          {dummyReminders.map(reminder => (
            <ReminderCard 
              key={reminder.id} 
              reminder={reminder} 
            />
          ))}
          
          {dummyReminders.length === 0 && (
            <div className="empty-state">
              <p>No reminders received! You're all caught up.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="reminders-section">
        <h2>Reminders You Sent</h2>
        
        <div className="reminders-list">
          {dummySentReminders.map(reminder => (
            <div key={reminder.id} className="sent-reminder-card">
              <div className="sent-reminder-header">
                <p>To: <strong>{reminder.to}</strong></p>
                <span className="sent-date">{reminder.date}</span>
              </div>
              
              <div className="sent-reminder-content">
                <p className="sent-message">{reminder.message}</p>
                <div className="sent-amount">₹{reminder.amount}</div>
              </div>
              
              <div className="sent-reminder-status">
                <span className="status-badge pending">Pending</span>
              </div>
            </div>
          ))}
          
          {dummySentReminders.length === 0 && (
            <div className="empty-state">
              <p>You haven't sent any reminders yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemindersPage;
