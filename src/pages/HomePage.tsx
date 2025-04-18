
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import TransactionCard from '@/components/TransactionCard';
import ReminderCard from '@/components/ReminderCard';

const HomePage = () => {
  // Mock data for balances
  const balances = {
    owed: 750,
    youOwe: 1200,
    total: -450
  };

  // Mock data for recent transactions
  const recentTransactions = [
    {
      id: 1,
      type: 'borrowed' as const,
      amount: 500,
      person: 'Aarav',
      date: 'Apr 18, 2025',
      description: 'Dinner at Urban Cafe'
    },
    {
      id: 2,
      type: 'borrowed' as const,
      amount: 350,
      person: 'Priya',
      date: 'Apr 15, 2025',
      description: 'Movie tickets and snacks'
    },
    {
      id: 3,
      type: 'borrowed' as const,
      amount: 350,
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
      date: '18 Apr, 2025'
    }
  ];

  return (
    <div className="px-4 py-6 bg-gray-50 min-h-screen">
      {/* Balance Overview */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-4 col-span-1">
          <h2 className="text-sm font-medium text-white/90 mb-2">Total Balance</h2>
          <div className="text-2xl font-bold mb-1">₹{balances.total}</div>
          <p className="text-xs text-white/80">
            {balances.total >= 0 ? 'You will receive this amount' : 'You need to pay this amount'}
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm col-span-1">
          <h2 className="text-sm font-medium text-gray-600 mb-2">Lent</h2>
          <div className="text-2xl font-bold text-green-600 mb-1">₹{balances.owed}</div>
          <p className="text-xs text-gray-500">Money to receive</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm col-span-1">
          <h2 className="text-sm font-medium text-gray-600 mb-2">Borrowed</h2>
          <div className="text-2xl font-bold text-red-600 mb-1">₹{balances.youOwe}</div>
          <p className="text-xs text-gray-500">Money to pay</p>
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Plus size={16} className="mr-1" /> New
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
          <h2 className="text-lg font-semibold">Reminders</h2>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Plus size={16} className="mr-1" /> New
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
