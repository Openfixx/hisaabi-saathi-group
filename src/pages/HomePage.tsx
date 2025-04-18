
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import BalanceCard from '@/components/BalanceCard';
import TransactionCard from '@/components/TransactionCard';
import ReminderCard from '@/components/ReminderCard';

const HomePage = () => {
  // Mock data for balances - ensure they're all defined
  const balances = {
    owed: 5200,
    youOwe: 2300,
    total: 2900
  };

  // Mock data for recent transactions
  const recentTransactions = [
    {
      id: 1,
      type: 'lent' as const,
      amount: 500,
      person: 'Aarav',
      date: 'Apr 18, 2025',
      description: 'Dinner at Urban Cafe'
    },
    {
      id: 2,
      type: 'borrowed' as const,
      amount: 1200,
      person: 'Priya',
      date: 'Apr 15, 2025',
      description: 'Movie tickets and snacks'
    },
    {
      id: 3,
      type: 'lent' as const,
      amount: 250,
      person: 'Vikram',
      date: 'Apr 12, 2025',
      description: 'Coffee and snacks'
    }
  ];

  // Mock data for reminders
  const reminders = [
    {
      id: 1,
      from: 'Aarav',
      to: 'You',
      amount: 500,
      message: 'Please pay for the dinner we had at Urban Cafe last week.',
      date: 'Apr 18, 2025'
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <BalanceCard 
          title="Owed to You" 
          amount={balances.owed} 
          type="owed" 
          description="From 4 people"
        />
        <BalanceCard 
          title="You Owe" 
          amount={balances.youOwe} 
          type="youOwe" 
          description="To 2 people"
        />
        <BalanceCard 
          title="Net Balance" 
          amount={balances.total} 
          type="total" 
          description="Updated just now"
        />
      </div>
      
      {/* Recent Transactions */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
            <Plus size={18} className="mr-1" /> Add Transaction
          </Button>
        </div>
        
        <div>
          {recentTransactions.map(transaction => (
            <TransactionCard 
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              person={transaction.person}
              date={transaction.date}
              description={transaction.description}
            />
          ))}
        </div>
      </div>
      
      {/* Reminders */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Reminders</h2>
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            <Plus size={18} className="mr-1" /> Send Reminder
          </Button>
        </div>
        
        <div>
          {reminders.map(reminder => (
            <ReminderCard key={reminder.id} reminder={reminder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
