
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  MessageSquare,
  Users, 
  Calculator, 
  History, 
  Bell, 
  User,
  Settings,
  LogOut,
  Plus,
  Menu,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ collapsed, toggleSidebar }: SidebarProps) => {
  const navLinks = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/chat', name: 'Chat', icon: MessageSquare },
    { path: '/groups', name: 'Groups', icon: Users },
    { path: '/calculator', name: 'Split Bill', icon: Calculator },
    { path: '/history', name: 'History', icon: History },
    { path: '/reminders', name: 'Reminders', icon: Bell },
    { path: '/profile', name: 'Profile', icon: User },
  ];

  return (
    <aside 
      className={`h-screen fixed left-0 top-0 bg-[#121212] text-white flex flex-col transition-all duration-300 
      ${collapsed ? 'w-20' : 'w-64'} z-20 shadow-xl`}
    >
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              HK
            </div>
            <span className="font-semibold text-white text-lg">Hisaab Kitaab</span>
          </div>
        )}
        {collapsed && (
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex mx-auto items-center justify-center text-white font-bold text-lg">
            HK
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-400 hover:text-white hover:bg-gray-800"
          onClick={toggleSidebar}
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>
      
      {!collapsed && (
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-purple-500">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-purple-800">JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">john.doe@example.com</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1 py-6 overflow-y-auto scrollbar-none">
        <nav>
          <ul className="space-y-1 px-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`
                  }
                >
                  <link.icon size={20} />
                  {!collapsed && <span>{link.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {!collapsed && (
        <div className="mx-4 mb-6">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 gap-2 rounded-xl py-6">
            <Plus size={20} />
            <span>New Transaction</span>
          </Button>
        </div>
      )}
      
      <div className="p-4 border-t border-gray-800">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800">
          <Settings size={20} />
          {!collapsed && <span>Settings</span>}
        </NavLink>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
