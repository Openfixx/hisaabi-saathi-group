
import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';
import { Input } from './ui/input';

const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 px-6 bg-white border-b">
      <div className="w-1/3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 h-10 bg-gray-50 border-gray-200"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-purple-600 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <UserCircle size={24} className="text-gray-600" />
          </div>
          <span className="font-medium">Rahul</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
