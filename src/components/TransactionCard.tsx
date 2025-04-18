
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
    <Card className="border-0 shadow-sm bg-white mb-3">
      <CardContent className="p-4 flex items-start">
        <div className="mr-4">
          {type === 'lent' ? (
            <ArrowUpRight size={20} className="text-green-600" />
          ) : (
            <ArrowDownRight size={20} className="text-red-600" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-gray-800">
            {type === 'lent' ? `Lent to ${person}` : `Borrowed from ${person}`}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{date}</p>
        </div>
        
        <div className={`font-bold ${type === 'lent' ? 'text-green-600' : 'text-red-600'}`}>
          {formattedAmount}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
