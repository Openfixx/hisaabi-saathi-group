
import React from 'react';
import Header from '../components/Header';
import './GroupsPage.css';
import { FaPlus, FaUser, FaUsers, FaEllipsisH } from 'react-icons/fa';

const GroupsPage = () => {
  // This would come from Supabase once integrated
  const dummyGroups = [
    {
      id: 1,
      name: 'Trip to Goa',
      members: ['You', 'Aarav', 'Priya', 'Vikram'],
      totalTransactions: 8,
      owedToYou: 3500,
      youOwe: 1200,
      lastActivity: '18 Apr, 2025'
    },
    {
      id: 2,
      name: 'Roommates',
      members: ['You', 'Deepak', 'Ananya'],
      totalTransactions: 15,
      owedToYou: 1800,
      youOwe: 2500,
      lastActivity: '15 Apr, 2025'
    }
  ];

  return (
    <div className="groups-page">
      <Header />
      
      <div className="groups-header">
        <h1>Your Groups</h1>
        <button className="new-group-btn">
          <FaPlus /> Create Group
        </button>
      </div>
      
      <div className="groups-grid">
        {dummyGroups.map(group => (
          <div key={group.id} className="group-card">
            <div className="group-card-header">
              <h2 className="group-name">{group.name}</h2>
              <button className="group-menu-btn">
                <FaEllipsisH />
              </button>
            </div>
            
            <div className="group-members">
              <div className="members-icon">
                <FaUsers />
              </div>
              <div className="members-count">
                {group.members.length} members
              </div>
            </div>
            
            <div className="group-transactions">
              <div className="transactions-count">
                {group.totalTransactions} transactions
              </div>
              <div className="transactions-date">
                Last activity: {group.lastActivity}
              </div>
            </div>
            
            <div className="group-balances">
              <div className="balance-item positive">
                <span className="balance-label">Owed to you</span>
                <span className="balance-amount">₹{group.owedToYou}</span>
              </div>
              
              <div className="balance-item negative">
                <span className="balance-label">You owe</span>
                <span className="balance-amount">₹{group.youOwe}</span>
              </div>
              
              <div className="balance-item total">
                <span className="balance-label">Net balance</span>
                <span className="balance-amount">
                  ₹{group.owedToYou - group.youOwe}
                </span>
              </div>
            </div>
            
            <div className="group-members-list">
              {group.members.map((member, index) => (
                <div key={index} className="member-item">
                  <div className="member-avatar">
                    {member === 'You' ? 'You' : member.charAt(0)}
                  </div>
                  <div className="member-name">{member}</div>
                </div>
              ))}
            </div>
            
            <div className="group-card-actions">
              <button className="view-group-btn">View Details</button>
              <button className="add-expense-btn">
                <FaPlus /> Add Expense
              </button>
            </div>
          </div>
        ))}
        
        <div className="create-group-card">
          <div className="create-group-icon">
            <FaPlus />
          </div>
          <h3>Create New Group</h3>
          <p>Start tracking shared expenses with friends, roommates, or for a trip</p>
          <button className="create-group-btn">Create Group</button>
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;
