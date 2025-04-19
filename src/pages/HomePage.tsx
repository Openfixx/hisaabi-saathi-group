
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
      type: 'lent' as const,
      amount: 500,
      person: 'Aarav',
      description: 'Dinner at Urban Cafe',
      date: '18 Apr, 2025'
    },
    {
      id: 2,
      type: 'borrowed' as const,
      amount: 1200,
      person: 'Priya',
      description: 'Movie tickets',
      date: '15 Apr, 2025'
    },
    {
      id: 3,
      type: 'lent' as const,
      amount: 250,
      person: 'Vikram',
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
        <BalanceCard
          amount={totalLent - totalBorrowed}
          type="total"
        />
        <BalanceCard
          title="Money To Receive"
          amount={totalLent}
          type="owed"
          description={`From ${dummyTransactions.filter(t => t.type === 'lent').length} people`}
        />
        <BalanceCard
          title="Money To Pay"
          amount={totalBorrowed}
          type="youOwe"
          description={`To ${dummyTransactions.filter(t => t.type === 'borrowed').length} people`}
        />
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
            {dummyTransactions.map(tx => (
              <TransactionCard 
                key={tx.id}
                type={tx.type}
                amount={tx.amount}
                person={tx.person}
                date={tx.date}
                description={tx.description}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="lent" className="m-0">
          <div className="space-y-4">
            {dummyTransactions.filter(t => t.type === 'lent').map(tx => (
              <TransactionCard 
                key={tx.id}
                type={tx.type}
                amount={tx.amount}
                person={tx.person}
                date={tx.date}
                description={tx.description}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="borrowed" className="m-0">
          <div className="space-y-4">
            {dummyTransactions.filter(t => t.type === 'borrowed').map(tx => (
              <TransactionCard 
                key={tx.id}
                type={tx.type}
                amount={tx.amount}
                person={tx.person}
                date={tx.date}
                description={tx.description}
              />
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
