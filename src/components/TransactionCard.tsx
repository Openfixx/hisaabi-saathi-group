
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import './TransactionCard.css';

interface SimpleTransactionCardProps {
  title: string;
  amount: number;
  date: string;
  participants: string[];
}

export function SimpleTransactionCard({
  title,
  amount,
  date,
  participants
}: SimpleTransactionCardProps) {
  return (
    <div className="transaction-card">
      <div className="transaction-header">
        <h3>{title}</h3>
        <span className="amount">₹{amount}</span>
      </div>
      
      <div className="transaction-footer">
        <div className="participants">
          {participants.map((emoji, index) => (
            <span key={index} className="participant-emoji">{emoji}</span>
          ))}
        </div>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

interface TransactionCardProps {
  type: 'lent' | 'borrowed';
  amount: number;
  person: string;
  date: string;
  description: string;
}

// Main TransactionCard component
const TransactionCard = ({ type, amount, person, date, description }: TransactionCardProps) => {
  // Create a safe way to get the first character, handling null/undefined cases
  const getInitial = (name: string | null | undefined): string => {
    if (!name) return '?';
    return name.charAt(0);
  };

  return (
    <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-gray-100">
              <AvatarFallback className={`${type === 'lent' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {getInitial(person)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-800">{person || 'Unknown'}</h3>
                <div className={`rounded-full px-2 py-0.5 text-xs ${
                  type === 'lent' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {type === 'lent' ? 'You lent' : 'You borrowed'}
                </div>
              </div>
              <p className="text-xs text-gray-500">{description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`flex items-center justify-end gap-1 font-medium ${
              type === 'lent' ? 'text-green-600' : 'text-red-600'
            }`}>
              {type === 'lent' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              ₹{amount}
            </div>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
