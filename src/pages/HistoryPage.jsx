
import React from 'react';
import Header from '../components/Header';
import './HistoryPage.css';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';

const HistoryPage = () => {
  // This would come from Supabase once integrated
  const dummyHistory = [
    {
      id: 1,
      type: 'transaction_added',
      details: 'Added: Lent ₹500 to Aarav for dinner',
      user: 'You',
      timestamp: '18 Apr, 2025 - 7:45 PM',
      pending: false
    },
    {
      id: 2,
      type: 'transaction_added',
      details: 'Added: Borrowed ₹1200 from Priya for movie tickets',
      user: 'You',
      timestamp: '15 Apr, 2025 - 6:30 PM',
      pending: false
    },
    {
      id: 3,
      type: 'transaction_edited',
      details: 'Changed: Amount from ₹200 to ₹250 for coffee',
      user: 'You',
      timestamp: '12 Apr, 2025 - 3:15 PM',
      pending: false
    },
    {
      id: 4,
      type: 'transaction_delete_requested',
      details: 'Requested to delete: Borrowed ₹500 from Aarav',
      user: 'You',
      timestamp: '10 Apr, 2025 - 2:00 PM',
      pending: true,
      approvals: {
        needed: 1,
        received: 0,
        users: ['Aarav']
      }
    }
  ];

  return (
    <div className="history-page">
      <Header />
      
      <div className="history-header">
        <h1>Transaction History</h1>
        <p>All changes to your expenses and transactions are recorded here</p>
      </div>
      
      <div className="history-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Added</button>
        <button className="filter-btn">Edited</button>
        <button className="filter-btn">Deleted</button>
        <button className="filter-btn">Pending</button>
      </div>
      
      <div className="history-timeline">
        {dummyHistory.map(item => (
          <div key={item.id} className={`history-item ${item.pending ? 'pending' : ''}`}>
            <div className="history-dot"></div>
            
            <div className="history-content">
              <div className="history-header-row">
                <span className="history-user">{item.user}</span>
                <span className="history-timestamp">{item.timestamp}</span>
              </div>
              
              <div className="history-details">
                {item.details}
              </div>
              
              {item.pending && (
                <div className="approval-section">
                  <div className="approval-status">
                    <span>Approval needed: {item.approvals.received}/{item.approvals.needed}</span>
                    <div className="approval-users">
                      {item.approvals.users.map((user, index) => (
                        <span key={index} className="approval-user">{user}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="approval-actions">
                    <button className="btn-approve">
                      <FaCheck /> Approve
                    </button>
                    <button className="btn-decline">
                      <FaTimes /> Decline
                    </button>
                  </div>
                </div>
              )}
              
              {!item.pending && item.type !== 'transaction_delete_requested' && (
                <div className="history-actions">
                  <button className="btn-delete">
                    <FaTrash /> Request Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
