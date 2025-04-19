
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, ArrowDownRight, Wallet, Plus, Clock, ArrowRight, Users } from 'lucide-react';
import BalanceCard from '../components/BalanceCard';
import TransactionCard from '../components/TransactionCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePage = () => {
  // Sample data
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

  const totalLent = dummyTransactions
    .filter(t => t.type === 'lent')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBorrowed = dummyTransactions
    .filter(t => t.type === 'borrowed')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome, John 👋</h1>
          <p className="text-gray-500">Track your expenses and split bills with friends</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus size={18} className="mr-2" /> Add Transaction
        </Button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl overflow-hidden shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-white/90">Total Balance</h3>
                <p className="text-2xl font-bold mt-1">₹{(totalLent - totalBorrowed).toLocaleString()}</p>
                <p className="text-xs mt-1 text-white/80">
                  {totalLent - totalBorrowed > 0 ? "You'll receive this amount" : "You need to pay this amount"}
                </p>
              </div>
              <div className="p-2 rounded-full bg-white/20">
                <Wallet size={24} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Money To Receive</h3>
                <p className="text-2xl font-bold mt-1 text-green-500">₹{totalLent.toLocaleString()}</p>
                <p className="text-xs mt-1 text-gray-400">From {dummyTransactions.filter(t => t.type === 'lent').length} people</p>
              </div>
              <div className="p-2 rounded-full bg-green-100">
                <ArrowUpRight size={24} className="text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Money To Pay</h3>
                <p className="text-2xl font-bold mt-1 text-red-500">₹{totalBorrowed.toLocaleString()}</p>
                <p className="text-xs mt-1 text-gray-400">To {dummyTransactions.filter(t => t.type === 'borrowed').length} people</p>
              </div>
              <div className="p-2 rounded-full bg-red-100">
                <ArrowDownRight size={24} className="text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <QuickActionCard icon={<Plus className="text-purple-600" />} title="Add Transaction" />
        <QuickActionCard icon={<Users className="text-blue-600" />} title="Split Bill" />
        <QuickActionCard icon={<Clock className="text-orange-600" />} title="Transaction History" />
        <QuickActionCard icon={<Wallet className="text-green-600" />} title="Settle Up" />
      </div>

      {/* Recent Activity */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Activity</h2>
          <TabsList className="bg-gray-100">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="lent">Lent</TabsTrigger>
            <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="m-0">
          <div className="space-y-4">
            {dummyTransactions.map(transaction => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="lent" className="m-0">
          <div className="space-y-4">
            {dummyTransactions.filter(t => t.type === 'lent').map(transaction => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="borrowed" className="m-0">
          <div className="space-y-4">
            {dummyTransactions.filter(t => t.type === 'borrowed').map(transaction => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const QuickActionCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
  return (
    <Card className="hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
          {icon}
        </div>
        <p className="font-medium">{title}</p>
      </CardContent>
    </Card>
  );
};

export default HomePage;
