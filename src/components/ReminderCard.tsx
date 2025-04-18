
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
    <Card className="mb-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <CardContent className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
            <Bell className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <div className="text-sm">From: <span className="font-medium">{reminder.from}</span></div>
            <div className="text-xs text-white/70">{reminder.date}</div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="mb-2">{reminder.message}</p>
          <div className="text-2xl font-bold">{formattedAmount}</div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="default" className="flex-1 bg-white text-purple-800 hover:bg-white/90">
            Pay Now
          </Button>
          <Button variant="outline" className="flex-1 bg-white/20 text-white border-white/20 hover:bg-white/30">
            Remind Later
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
