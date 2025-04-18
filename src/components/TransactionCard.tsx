
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TransactionCardProps {
  type: 'lent' | 'borrowed';
  amount: number;
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
  return (
    <Card className={`mb-4 border-l-4 ${type === 'lent' ? 'border-l-green-500' : 'border-l-red-500'}`}>
      <CardContent className="p-4 flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          type === 'lent' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
        } mr-4`}>
          {type === 'lent' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium">
            {type === 'lent' ? `Lent to ${person}` : `Borrowed from ${person}`}
          </h3>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>
        
        <div className={`font-bold text-lg ${type === 'lent' ? 'text-green-500' : 'text-red-500'}`}>
          ₹{amount.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
