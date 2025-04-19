import ReminderCard from '../components/ReminderCard';
import '../RemindersPage.css';

export default function RemindersPage() {
  const reminders = [
    {
      id: 1,
      message: 'Alex owes you ₹500 for Goa trip',
      status: 'pending',
      date: '2h ago'
    },
    {
      id: 2,
      message: 'You owe Sam ₹200 for utilities',
      status: 'cleared',
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
            message={reminder.message}
            status={reminder.status}
            date={reminder.date}
          />
        ))}
      </div>
    </div>
  );
}
