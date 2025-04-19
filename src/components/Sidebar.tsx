
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
  Menu,
  ChevronLeft,
  Wallet,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ collapsed, toggleSidebar }: SidebarProps) => {
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
    <aside 
      className={`h-screen fixed left-0 top-0 bg-[#121212] text-white flex flex-col transition-all duration-300 
      ${collapsed ? 'w-20' : 'w-64'} z-20`}
    >
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className={`flex items-center ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            HK
          </div>
          {!collapsed && <span className="ml-3 font-semibold text-white">Hisaab Kitaab</span>}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-400 hover:text-white hover:bg-gray-800"
          onClick={toggleSidebar}
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
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
                        ? 'bg-purple-600 text-white' 
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
          <Button className="w-full bg-purple-600 hover:bg-purple-700 gap-2 rounded-xl py-6">
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
