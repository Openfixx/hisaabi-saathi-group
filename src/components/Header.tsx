
import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Input } from './ui/input';

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center h-16 px-6 bg-white border-b">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu size={24} />
        </button>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input 
            type="text" 
            placeholder="Search services..." 
            className="pl-10 h-10 bg-gray-50 border-gray-200 w-[300px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
