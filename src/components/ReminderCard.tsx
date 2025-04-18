
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, CheckCircle, Clock } from 'lucide-react';

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
    <Card className="bg-white shadow-sm border-0 mb-3 hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex items-start mb-3">
          <div className="bg-purple-100 p-2 rounded-full mr-3">
            <Bell className="text-purple-600" size={18} />
          </div>
          <div>
            <div className="text-sm font-medium">From: {reminder.from}</div>
            <div className="text-xs text-gray-500 flex items-center">
              <Clock size={12} className="mr-1" />
              {reminder.date}
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-gray-700">{reminder.message}</p>
          <div className="text-lg font-bold mt-1">{formattedAmount}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="default" 
            className="bg-purple-600 hover:bg-purple-700 text-xs py-1 h-auto flex items-center gap-1"
          >
            <CheckCircle size={14} />
            Pay Now
          </Button>
          <Button 
            variant="outline" 
            className="text-purple-600 border-purple-200 hover:bg-purple-50 text-xs py-1 h-auto"
          >
            Remind Later
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
