
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calculator, 
  DollarSign, 
  Users, 
  Percent,
  PlusCircle, 
  Save
} from 'lucide-react';

const CalculatorPage = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [selectedTab, setSelectedTab] = useState('calculate');
  const [result, setResult] = useState<number | null>(null);
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('add');
  const [secondAmount, setSecondAmount] = useState<number | ''>('');
  
  // Handle calculation
  const handleCalculate = () => {
    if (amount === '' || secondAmount === '') return;
    
    let calculatedResult: number;
    switch (operation) {
      case 'add':
        calculatedResult = Number(amount) + Number(secondAmount);
        break;
      case 'subtract':
        calculatedResult = Number(amount) - Number(secondAmount);
        break;
      case 'multiply':
        calculatedResult = Number(amount) * Number(secondAmount);
        break;
      case 'divide':
        calculatedResult = Number(secondAmount) !== 0 
          ? Number(amount) / Number(secondAmount) 
          : 0;
        break;
      default:
        calculatedResult = 0;
    }
    
    setResult(calculatedResult);
  };
  
  // Quick actions
  const quickActions = [
    { name: 'Split equally among 3', action: () => {
      if (amount !== '') {
        setSecondAmount(3);
        setOperation('divide');
      }
    }},
    { name: 'Add 5% tax', action: () => {
      if (amount !== '') {
        setSecondAmount(5);
        setOperation('multiply');
        setTimeout(() => {
          setResult(Number(amount) * 1.05);
        }, 100);
      }
    }},
    { name: 'Add 10% tip', action: () => {
      if (amount !== '') {
        setSecondAmount(10);
        setOperation('multiply');
        setTimeout(() => {
          setResult(Number(amount) * 1.1);
        }, 100);
      }
    }},
    { name: 'Round up', action: () => {
      if (amount !== '') {
        setResult(Math.ceil(Number(amount)));
      }
    }}
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Calculator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          {/* Tips Card */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Calculator size={18} className="mr-2 text-purple-600" />
                Tips
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-1 mr-2 mt-0.5">
                    <DollarSign size={14} />
                  </div>
                  <p className="text-sm text-gray-600">Add a description to record who you lent to or borrowed from</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-1 mr-2 mt-0.5">
                    <Users size={14} />
                  </div>
                  <p className="text-sm text-gray-600">Use this calculator to split bills easily among friends</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-1 mr-2 mt-0.5">
                    <Save size={14} />
                  </div>
                  <p className="text-sm text-gray-600">Save transactions to update your balance</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-1 mr-2 mt-0.5">
                    <Percent size={14} />
                  </div>
                  <p className="text-sm text-gray-600">Calculate tax and tip on the fly</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Quick Actions */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="text-sm h-auto py-2" 
                    onClick={action.action}
                  >
                    {action.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="shadow-md">
            <Tabs defaultValue="calculate" onValueChange={setSelectedTab} value={selectedTab}>
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="calculate">Calculate</TabsTrigger>
                <TabsTrigger value="split">Split Bill</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calculate" className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
                      placeholder="Enter amount"
                      className="text-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="operation">Operation</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { value: 'add', label: 'Add (+)' },
                        { value: 'subtract', label: 'Subtract (-)' },
                        { value: 'multiply', label: 'Multiply (×)' },
                        { value: 'divide', label: 'Divide (÷)' }
                      ].map((op) => (
                        <Button
                          key={op.value}
                          type="button"
                          variant={operation === op.value ? 'default' : 'outline'}
                          className={`${operation === op.value ? 'bg-purple-600' : ''}`}
                          onClick={() => setOperation(op.value as any)}
                        >
                          {op.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="secondAmount">Second Amount</Label>
                    <Input
                      id="secondAmount"
                      type="number"
                      value={secondAmount}
                      onChange={(e) => setSecondAmount(e.target.value ? Number(e.target.value) : '')}
                      placeholder="Enter second amount"
                      className="text-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description (optional)</Label>
                    <Input
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="What's this calculation for?"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg" 
                    onClick={handleCalculate}
                  >
                    Calculate
                  </Button>
                  
                  {result !== null && (
                    <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-sm text-purple-700">Result:</p>
                      <p className="text-2xl font-bold text-purple-800">₹{result.toFixed(2)}</p>
                      
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" className="flex-1">
                          Reset
                        </Button>
                        <Button className="flex-1 bg-purple-600">
                          <PlusCircle size={18} className="mr-2" /> Add as Transaction
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="split" className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="totalAmount">Total Bill Amount</Label>
                    <Input
                      id="totalAmount"
                      type="number"
                      placeholder="Enter total amount"
                      className="text-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="splitBetween">Split Between</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="splitBetween"
                        type="number"
                        placeholder="Number of people"
                        defaultValue={3}
                        min={2}
                        className="text-lg"
                      />
                      <Button variant="outline">
                        <Users size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <input type="checkbox" id="includeTax" className="rounded text-purple-600" />
                    <Label htmlFor="includeTax">Include 5% tax</Label>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <input type="checkbox" id="includeTip" className="rounded text-purple-600" />
                    <Label htmlFor="includeTip">Include 10% tip</Label>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="e.g., Dinner at Restaurant"
                    />
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg">
                    Calculate Split
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
