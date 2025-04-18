
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const CalculatorPage = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [person, setPerson] = useState('');
  const [type, setType] = useState<'lent' | 'borrowed'>('lent');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the transaction
    console.log({
      amount: parseFloat(amount),
      description,
      person,
      type
    });
    
    // Reset form
    setAmount('');
    setDescription('');
    setPerson('');
  };
  
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Transaction</h1>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Transaction Calculator</h2>
              <p className="text-sm text-gray-500">Record money you lent or borrowed</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Transaction Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setType('lent')}
                    className={`p-3 rounded-lg border ${
                      type === 'lent' 
                        ? 'bg-green-50 border-green-200 text-green-700' 
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    I Lent Money
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('borrowed')}
                    className={`p-3 rounded-lg border ${
                      type === 'borrowed' 
                        ? 'bg-red-50 border-red-200 text-red-700' 
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    I Borrowed Money
                  </button>
                </div>
              </div>
              
              <div>
                <label htmlFor="person" className="block text-sm font-medium mb-1">
                  {type === 'lent' ? 'Lent To' : 'Borrowed From'}
                </label>
                <Input
                  id="person"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                  placeholder="Enter name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount (₹)</label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What was this for?"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Save Transaction
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculatorPage;
