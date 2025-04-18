
import React from 'react';
import './TransactionCard.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const TransactionCard = ({ transaction }) => {
  const { type, amount, user, description, date } = transaction;
  
  // Determine if this is a money given or received transaction
  const isLent = type === 'lent';
  const TransactionIcon = isLent ? FaArrowUp : FaArrowDown;
  
  return (
    <div className={`transaction-card ${isLent ? 'lent' : 'borrowed'}`}>
      <div className="transaction-icon">
        <TransactionIcon />
      </div>
      
      <div className="transaction-details">
        <h3 className="transaction-title">
          {isLent ? `Lent to ${user}` : `Borrowed from ${user}`}
        </h3>
        <p className="transaction-description">{description}</p>
        <span className="transaction-date">{date}</span>
      </div>
      
      <div className="transaction-amount">
        <span className={`amount ${isLent ? 'lent' : 'borrowed'}`}>
          {isLent ? '+' : '-'}₹{amount}
        </span>
      </div>
    </div>
  );
};

export default TransactionCard;
