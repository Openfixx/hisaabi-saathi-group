
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Calculator, 
  Users, 
  History, 
  Bell, 
  UserCircle,
  Settings,
  LogOut,
  MessageSquare,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navLinks = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/chat', name: 'Chat', icon: MessageSquare },
    { path: '/groups', name: 'Groups', icon: Users },
    { path: '/calculator', name: 'Calculator', icon: Calculator },
    { path: '/history', name: 'History', icon: History },
    { path: '/reminders', name: 'Reminders', icon: Bell },
    { path: '/profile', name: 'Profile', icon: UserCircle },
  ];

  return (
    <aside className={`h-screen fixed left-0 top-0 bg-white border-r flex flex-col transition-all duration-300 
      ${collapsed ? 'w-20' : 'w-64'} z-20`}>
      <div className="p-4 border-b flex items-center justify-between">
        <div className={`flex items-center ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            HK
          </div>
          {!collapsed && <span className="ml-3 font-semibold text-gray-800">Hisaab Kitaab</span>}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu size={20} />
        </Button>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <nav>
          <ul className="space-y-1 px-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-purple-50 text-purple-700' 
                        : 'text-gray-700 hover:bg-gray-50'
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
      
      <div className="p-4 border-t">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
          <Settings size={20} />
          {!collapsed && <span>Settings</span>}
        </NavLink>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
