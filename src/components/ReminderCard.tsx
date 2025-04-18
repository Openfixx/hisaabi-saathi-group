
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

interface ReminderCardProps {
  reminder: {
    id: number;
    from: string;
    to: string;
    amount: number | undefined;
    message: string;
    date: string;
  };
}

const ReminderCard: React.FC<ReminderCardProps> = ({ reminder }) => {
  // Format amount safely
  const formattedAmount = reminder.amount !== undefined ? `₹${reminder.amount.toLocaleString()}` : '₹0';

  return (
    <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white transition-all hover:shadow-lg">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Bell className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">From: {reminder.from}</div>
            <div className="text-xs text-white/70">{reminder.date}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm">{reminder.message}</p>
          <div className="text-2xl font-bold">{formattedAmount}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="default" 
            className="bg-white text-purple-800 hover:bg-gray-100 transition-colors"
          >
            Pay Now
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/20 text-white border-white/20 hover:bg-white/30 transition-colors"
          >
            Remind Later
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
