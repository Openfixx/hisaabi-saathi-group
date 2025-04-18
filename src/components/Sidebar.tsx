
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
  MessageSquare
} from 'lucide-react';
import Logo from './Logo';

const Sidebar = () => {
  const navLinks = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/calculator', name: 'Calculator', icon: Calculator },
    { path: '/chat', name: 'Chat', icon: MessageSquare },
    { path: '/groups', name: 'Groups', icon: Users },
    { path: '/history', name: 'History', icon: History },
    { path: '/reminders', name: 'Reminders', icon: Bell },
    { path: '/profile', name: 'Profile', icon: UserCircle },
  ];

  return (
    <div className="h-screen fixed left-0 top-0 bg-white border-r w-64 flex flex-col p-4">
      <div className="mb-8 pl-2">
        <div className="text-xl font-bold">
          <span className="text-purple-600">HK</span>
        </div>
        <div className="text-lg font-semibold text-gray-800">Hisaab Kitaab</div>
      </div>
      
      <div className="flex-1">
        <nav>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
