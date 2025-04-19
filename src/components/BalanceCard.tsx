
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';
import LinearGradient from './LinearGradient';
import './BalanceCard.css';

interface BalanceCardProps {
  title?: string;
  amount: number | undefined;
  type: 'owed' | 'youOwe' | 'total';
  description?: string;
}

export default function BalanceCard({ 
  title, 
  amount, 
  type, 
  description 
}: BalanceCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'owed': return <ArrowUpRight className="text-green-500" size={24} />;
      case 'youOwe': return <ArrowDownRight className="text-red-500" size={24} />;
      case 'total': return <Wallet className="text-white" size={24} />;
      default: return null;
    }
  };

  const getAmountColor = () => {
    switch (type) {
      case 'owed': return 'text-green-500';
      case 'youOwe': return 'text-red-500';
      case 'total': return 'text-white';
      default: return '';
    }
  };

  const getDefaultTitle = () => {
    switch (type) {
      case 'owed': return 'Money to Receive';
      case 'youOwe': return 'Money to Pay';
      case 'total': return 'Total Balance';
      default: return '';
    }
  };

  const getDefaultDescription = () => {
    switch (type) {
      case 'owed': return 'You will receive this amount';
      case 'youOwe': return 'You need to pay this amount';
      case 'total': return amount && amount >= 0 ? 'You will receive this amount' : 'You need to pay this amount';
      default: return '';
    }
  };

  // Use provided title/description or default values
  const displayTitle = title || getDefaultTitle();
  const displayDescription = description || getDefaultDescription();

  // Wrap the total balance card with LinearGradient
  return (
    <LinearGradient 
      colors={type === 'total' ? ['#6C63FF', '#8E85FF'] : ['#ffffff', '#ffffff']} 
      className="balance-card rounded-xl overflow-hidden shadow-lg"
    >
      <Card className={`overflow-hidden hover:shadow-md transition-all ${type === 'total' ? 'bg-transparent text-white' : 'bg-white'} border-0`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-sm font-medium ${type === 'total' ? 'text-white/90' : 'text-gray-500'}`}>
                {displayTitle}
              </h3>
              <p className={`text-2xl font-bold mt-1 ${getAmountColor()}`}>
                ₹{amount?.toLocaleString() || '0'}
              </p>
              {displayDescription && (
                <p className={`text-xs mt-1 ${type === 'total' ? 'text-white/80' : 'text-gray-400'}`}>
                  {displayDescription}
                </p>
              )}
            </div>
            <div className={`p-2 rounded-full ${type === 'total' ? 'bg-white/20' : type === 'owed' ? 'bg-green-100' : 'bg-red-100'}`}>
              {getIcon()}
            </div>
          </div>
        </CardContent>
      </Card>
    </LinearGradient>
  );
}
