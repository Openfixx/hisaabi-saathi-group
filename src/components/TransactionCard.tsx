
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
    <Card className="hover:shadow-md transition-all border-0 shadow-sm">
      <CardContent className="p-4 flex items-center">
        <div className={`p-3 rounded-full mr-4 ${type === 'lent' ? 'bg-green-100' : 'bg-red-100'}`}>
          {type === 'lent' ? (
            <ArrowUpRight size={20} className="text-green-600" />
          ) : (
            <ArrowDownRight size={20} className="text-red-600" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-800">
              {type === 'lent' ? `You lent ${person}` : `${person} lent you`}
            </h3>
            <div className={`font-bold ${type === 'lent' ? 'text-green-600' : 'text-red-600'}`}>
              {formattedAmount}
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-xs text-gray-500">{description}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
