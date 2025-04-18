
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, ArrowUpRight, ArrowDownRight, Users, BarChart3, Clock, Wallet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import TransactionCard from '@/components/TransactionCard';
import { Link } from 'react-router-dom';

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
      type: 'lent' as const,
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

  // Mock data for groups
  const groups = [
    { id: 1, name: 'Roommates', members: 4, activity: 'Active now' },
    { id: 2, name: 'Trip to Goa', members: 6, activity: '2 hrs ago' },
    { id: 3, name: 'Office Lunch', members: 8, activity: '1 day ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, Rahul</h1>
          <p className="text-gray-500">Track your expenses and settle up with friends</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus size={16} className="mr-1" /> Add Transaction
        </Button>
      </div>
      
      {/* Balance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white overflow-hidden">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <h2 className="text-sm font-medium text-white/90 mb-1">Total Balance</h2>
              <div className="text-3xl font-bold mb-1">
                ₹{balances.total !== undefined ? balances.total.toLocaleString() : 0}
              </div>
              <p className="text-xs text-white/80">
                {balances.total >= 0 ? 'You will receive this amount' : 'You need to pay this amount'}
              </p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Wallet className="text-white" size={24} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">Money to Receive</h2>
              <div className="text-3xl font-bold text-green-600 mb-1">
                ₹{balances.owed !== undefined ? balances.owed.toLocaleString() : 0}
              </div>
              <p className="text-xs text-gray-500">From 3 people</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <ArrowUpRight className="text-green-600" size={24} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">Money to Pay</h2>
              <div className="text-3xl font-bold text-red-600 mb-1">
                ₹{balances.youOwe !== undefined ? balances.youOwe.toLocaleString() : 0}
              </div>
              <p className="text-xs text-gray-500">To 2 people</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <ArrowDownRight className="text-red-600" size={24} />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/chat">
          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="bg-purple-100 p-3 rounded-full mb-2">
                <MessageSquare className="text-purple-600" size={24} />
              </div>
              <h3 className="font-medium text-gray-800">Chat</h3>
              <p className="text-xs text-gray-500">Message friends</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/groups">
          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-2">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="font-medium text-gray-800">Groups</h3>
              <p className="text-xs text-gray-500">Manage group expenses</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/history">
          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-2">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="font-medium text-gray-800">History</h3>
              <p className="text-xs text-gray-500">View all transactions</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/calculator">
          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="bg-amber-100 p-3 rounded-full mb-2">
                <BarChart3 className="text-amber-600" size={24} />
              </div>
              <h3 className="font-medium text-gray-800">Calculate</h3>
              <p className="text-xs text-gray-500">Split bills easily</p>
            </CardContent>
          </Card>
        </Link>
      </div>
      
      {/* Recent Transactions and Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
            <Link to="/history" className="text-sm text-purple-600 font-medium hover:underline">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
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
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Your Groups</h2>
            <Link to="/groups" className="text-sm text-purple-600 font-medium hover:underline">
              View all
            </Link>
          </div>
          
          <div className="space-y-3">
            {groups.map(group => (
              <Card key={group.id} className="hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-10 h-10 rounded-full flex items-center justify-center text-white font-medium">
                      {group.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{group.name}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-xs text-gray-500">{group.members} members</p>
                        <span className="text-xs text-purple-600">{group.activity}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="outline" className="w-full border-dashed border-2 text-gray-500">
              <Plus size={16} className="mr-1" /> Create new group
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
