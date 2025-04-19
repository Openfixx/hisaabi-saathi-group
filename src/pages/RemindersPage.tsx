
import React from 'react';
import ReminderCard from '../components/ReminderCard';

export default function RemindersPage() {
  const reminders = [
    {
      id: 1,
      from: 'Alex',
      to: 'You',
      amount: 500,
      message: 'Alex owes you ₹500 for Goa trip',
      date: '2h ago'
    },
    {
      id: 2,
      from: 'Sam',
      to: 'You',
      amount: 200,
      message: 'You owe Sam ₹200 for utilities',
      date: '1d ago'
    }
  ];

  return (
    <div className="reminders-container">
      <h1>Active Reminders</h1>
      <div className="reminders-list">
        {reminders.map(reminder => (
          <ReminderCard
            key={reminder.id}
            reminder={reminder}
          />
        ))}
      </div>
    </div>
  );
}
