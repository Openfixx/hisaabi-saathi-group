
import React from 'react';
import './ReminderCard.css';
import { FaBell } from 'react-icons/fa';

const ReminderCard = ({ reminder }) => {
  const { from, to, amount, message, date } = reminder;

  return (
    <div className="reminder-card">
      <div className="reminder-header">
        <div className="reminder-icon">
          <FaBell />
        </div>
        <div className="reminder-user">
          <strong>{from}</strong> reminded <strong>you</strong>
        </div>
        <div className="reminder-date">{date}</div>
      </div>
      
      <div className="reminder-content">
        <p className="reminder-message">{message}</p>
        <div className="reminder-amount">₹{amount}</div>
      </div>
      
      <div className="reminder-actions">
        <button className="btn-pay">Pay Now</button>
        <button className="btn-later">Later</button>
      </div>
    </div>
  );
};

export default ReminderCard;
