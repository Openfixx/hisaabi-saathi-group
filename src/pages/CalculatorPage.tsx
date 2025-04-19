
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calculator, 
  Users, 
  DollarSign, 
  Percent, 
  ArrowRight, 
  Plus, 
  Minus, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const CalculatorPage = () => {
  const [amount, setAmount] = useState('');
  const [splitMode, setSplitMode] = useState('equal');
  const [selectedFriends, setSelectedFriends] = useState<number[]>([1, 2]);
  
  // Mock data for friends
  const friends = [
    { id: 1, name: 'Aarav', initial: 'A' },
    { id: 2, name: 'Priya', initial: 'P' },
    { id: 3, name: 'Vikram', initial: 'V' },
    { id: 4, name: 'Neha', initial: 'N' },
    { id: 5, name: 'Rajiv', initial: 'R' },
  ];

  const handleAddDigit = (digit: string) => {
    // Don't add multiple decimal points
    if (digit === '.' && amount.includes('.')) return;
    
    setAmount(prev => prev + digit);
  };

  const handleClear = () => {
    setAmount('');
  };

  const handleBackspace = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const toggleFriendSelection = (id: number) => {
    if (selectedFriends.includes(id)) {
      setSelectedFriends(selectedFriends.filter(friendId => friendId !== id));
    } else {
      setSelectedFriends([...selectedFriends, id]);
    }
  };

  const getEqualShare = () => {
    if (!amount || selectedFriends.length === 0) return '0';
    
    const perPerson = parseFloat(amount) / (selectedFriends.length + 1);
    return perPerson.toFixed(2);
  };

  return (
    <div className="max-w-3xl mx-auto py-4">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-2xl font-bold">Money Transfer</h1>
      </div>
      
      <Tabs defaultValue="split" className="w-full mb-6">
        <TabsList className="grid grid-cols-2 w-full bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="split" className="rounded-md data-[state=active]:bg-white">
            <Calculator className="mr-2 h-4 w-4" /> Split Bills
          </TabsTrigger>
          <TabsTrigger value="transfer" className="rounded-md data-[state=active]:bg-white">
            <DollarSign className="mr-2 h-4 w-4" /> Transfer Money
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="split" className="mt-4">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Amount</h2>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold flex items-center justify-center">
                  <span className="text-2xl mr-2">₹</span>
                  <span>{amount || '0'}</span>
                </div>
                <p className="text-gray-500 mt-2">Enter the total amount to split</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'del'].map((key) => (
                  <Button
                    key={key}
                    variant={typeof key === 'number' || key === '.' ? "outline" : "secondary"}
                    className="h-12 text-lg font-medium"
                    onClick={() => {
                      if (key === 'del') {
                        handleBackspace();
                      } else if (typeof key === 'number' || key === '.') {
                        handleAddDigit(key.toString());
                      }
                    }}
                  >
                    {key === 'del' ? '⌫' : key}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Split With</h2>
              <div className="flex flex-wrap gap-3">
                {friends.map(friend => (
                  <div 
                    key={friend.id}
                    onClick={() => toggleFriendSelection(friend.id)}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border ${
                      selectedFriends.includes(friend.id) 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200'
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className={`${
                        selectedFriends.includes(friend.id) 
                          ? 'bg-purple-200 text-purple-700' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {friend.initial}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{friend.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Split Method</h2>
              <div className="flex flex-col gap-3">
                <Button 
                  variant={splitMode === 'equal' ? "default" : "outline"}
                  className={`justify-between h-auto p-4 ${splitMode === 'equal' ? 'bg-purple-600' : ''}`}
                  onClick={() => setSplitMode('equal')}
                >
                  <div className="flex items-center">
                    <div className="mr-3 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Percent size={16} />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Split Equally</div>
                      <div className="text-xs">Everyone pays the same amount</div>
                    </div>
                  </div>
                  <ChevronRight size={20} />
                </Button>
                
                <Button 
                  variant={splitMode === 'custom' ? "default" : "outline"}
                  className={`justify-between h-auto p-4 ${splitMode === 'custom' ? 'bg-purple-600' : ''}`}
                  onClick={() => setSplitMode('custom')}
                >
                  <div className="flex items-center">
                    <div className="mr-3 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <DollarSign size={16} />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Custom Amount</div>
                      <div className="text-xs">Each person pays a different amount</div>
                    </div>
                  </div>
                  <ChevronRight size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="border-t border-b py-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Total amount</span>
                  <span className="font-medium">₹{amount || '0'}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Number of people</span>
                  <span className="font-medium">{selectedFriends.length + 1}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Each person pays</span>
                  <span className="font-bold text-lg">₹{getEqualShare()}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Your share will be ₹{getEqualShare()}</p>
                <Button className="w-full py-6 bg-purple-600">
                  Split Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="transfer" className="mt-4">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Transfer from</h2>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <DollarSign className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">My Account</div>
                    <div className="text-xs text-gray-500">**** 7543</div>
                  </div>
                </div>
                <div className="font-bold">₹2,300.00</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Amount</h2>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold flex items-center justify-center">
                  <span className="text-2xl mr-2">₹</span>
                  <span>{amount || '0'}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'del'].map((key) => (
                  <Button
                    key={key}
                    variant={typeof key === 'number' || key === '.' ? "outline" : "secondary"}
                    className="h-12 text-lg font-medium"
                    onClick={() => {
                      if (key === 'del') {
                        handleBackspace();
                      } else if (typeof key === 'number' || key === '.') {
                        handleAddDigit(key.toString());
                      }
                    }}
                  >
                    {key === 'del' ? '⌫' : key}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Transfer limits</h2>
              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Daily limit</span>
                  <span className="text-sm font-medium">₹1,000.00</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              
              <h3 className="font-medium mb-3">Quick Send</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {friends.slice(0, 4).map(friend => (
                  <div key={friend.id} className="flex flex-col items-center gap-1 min-w-[60px]">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gray-200 text-gray-700">
                        {friend.initial}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{friend.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Button className="w-full py-6 bg-green-500 hover:bg-green-600">
            Next <ArrowRight className="ml-2" size={16} />
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CalculatorPage;
