import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';
import LinearGradient from '../LinearGradient';
import './BalanceCard.css';

// Modified version that keeps your existing functionality but adds the gradient
export default function BalanceCard({ title, amount, type, description }: {
  title: string;
  amount: number | undefined;
  type: 'owed' | 'youOwe' | 'total';
  description?: string;
}) {
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

  // Wrap the total balance card with LinearGradient
  return (
    <LinearGradient colors={['#6C63FF', '#8E85FF']} className="balance-card">
      <Card className={`overflow-hidden hover:shadow-md transition-all ${type === 'total' ? 'bg-transparent text-white' : 'bg-white'}`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-sm font-medium ${type === 'total' ? 'text-white/90' : 'text-gray-500'}`}>
                {title}
              </h3>
              <p className={`text-2xl font-bold mt-1 ${getAmountColor()}`}>
                ₹{amount?.toLocaleString() || '0'}
              </p>
              {description && (
                <p className={`text-xs mt-1 ${type === 'total' ? 'text-white/80' : 'text-gray-400'}`}>
                  {description}
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
