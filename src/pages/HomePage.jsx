
import React from 'react';
import Header from '../components/Header';
import TransactionCard from '../components/TransactionCard';
import ReminderCard from '../components/ReminderCard';
import './HomePage.css';
import { FaPlus } from 'react-icons/fa';

const HomePage = () => {
  // These would come from Supabase once integrated
  const dummyTransactions = [
    {
      id: 1,
      type: 'lent',
      amount: 500,
      user: 'Aarav',
      description: 'Dinner at Urban Cafe',
      date: '18 Apr, 2025'
    },
    {
      id: 2,
      type: 'borrowed',
      amount: 1200,
      user: 'Priya',
      description: 'Movie tickets',
      date: '15 Apr, 2025'
    },
    {
      id: 3,
      type: 'lent',
      amount: 250,
      user: 'Vikram',
      description: 'Coffee and snacks',
      date: '12 Apr, 2025'
    }
  ];

  const dummyReminders = [
    {
      id: 1,
      from: 'Aarav',
      to: 'You',
      amount: 500,
      message: 'Please pay for the dinner we had at Urban Cafe last week.',
      date: '18 Apr, 2025'
    }
  ];

  const totalLent = dummyTransactions
    .filter(t => t.type === 'lent')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBorrowed = dummyTransactions
    .filter(t => t.type === 'borrowed')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="home-page">
      <Header />
      
      <div className="balance-overview">
        <div className="balance-card total-balance">
          <h2>Total Balance</h2>
          <div className="balance-amount">
            ₹{totalLent - totalBorrowed}
          </div>
          {totalLent - totalBorrowed > 0 ? (
            <p>You'll receive this amount</p>
          ) : (
            <p>You need to pay this amount</p>
          )}
        </div>
        
        <div className="balance-card lent">
          <h2>Lent</h2>
          <div className="balance-amount positive">₹{totalLent}</div>
          <p>Money to receive</p>
        </div>
        
        <div className="balance-card borrowed">
          <h2>Borrowed</h2>
          <div className="balance-amount negative">₹{totalBorrowed}</div>
          <p>Money to pay</p>
        </div>
      </div>
      
      <div className="section-transactions">
        <div className="section-header">
          <h2>Recent Transactions</h2>
          <button className="add-button">
            <FaPlus /> New
          </button>
        </div>
        
        <div className="transactions-list">
          {dummyTransactions.map(transaction => (
            <TransactionCard 
              key={transaction.id} 
              transaction={transaction} 
            />
          ))}
        </div>
      </div>
      
      <div className="section-reminders">
        <div className="section-header">
          <h2>Reminders</h2>
          <button className="add-button">
            <FaPlus /> New
          </button>
        </div>
        
        <div className="reminders-list">
          {dummyReminders.map(reminder => (
            <ReminderCard 
              key={reminder.id} 
              reminder={reminder} 
            />
          ))}
          
          {dummyReminders.length === 0 && (
            <div className="empty-state">
              <p>No reminders yet! All caught up.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
