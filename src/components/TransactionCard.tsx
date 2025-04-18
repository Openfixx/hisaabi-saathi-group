
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TransactionCardProps {
  type: 'lent' | 'borrowed';
  amount: number | undefined;
  person: string;
  date: string;
  description: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  type,
  amount,
  person,
  date,
  description,
}) => {
  // Format amount safely
  const formattedAmount = amount !== undefined ? `₹${amount.toLocaleString()}` : '₹0';

  return (
    <Card className={`border-l-4 transition-all hover:shadow-md ${type === 'lent' ? 'border-l-green-500' : 'border-l-red-500'}`}>
      <CardContent className="p-4 flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          type === 'lent' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
        }`}>
          {type === 'lent' ? <ArrowUpRight size={24} /> : <ArrowDownRight size={24} />}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">
            {type === 'lent' ? `Lent to ${person}` : `Borrowed from ${person}`}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-xs text-gray-500 mt-1">{date}</p>
        </div>
        
        <div className={`font-bold text-lg ${type === 'lent' ? 'text-green-600' : 'text-red-600'}`}>
          {formattedAmount}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
