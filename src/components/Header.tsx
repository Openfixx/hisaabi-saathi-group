
import React from 'react';
import { Search, Bell, MessageSquare, Plus, UserCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center h-16 px-6 bg-white border-b">
      <div className="w-1/3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="text" 
            placeholder="Search transactions, contacts..." 
            className="pl-10 h-10 bg-gray-50 border-gray-200 w-full max-w-md"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <MessageSquare size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 rounded-full text-xs text-white flex items-center justify-center">
            2
          </span>
        </button>
        
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        
        <Button variant="outline" size="sm" className="flex items-center gap-1 border-gray-200">
          <Plus size={16} />
          <span>New</span>
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
            <UserCircle size={24} className="text-purple-600" />
          </div>
          <span className="font-medium">Rahul</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
