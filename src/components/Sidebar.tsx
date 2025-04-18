
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
  LogOut
} from 'lucide-react';
import Logo from './Logo';

const Sidebar = () => {
  const navLinks = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/calculator', name: 'Calculator', icon: Calculator },
    { path: '/groups', name: 'Groups', icon: Users },
    { path: '/history', name: 'History', icon: History },
    { path: '/reminders', name: 'Reminders', icon: Bell },
    { path: '/profile', name: 'Profile', icon: UserCircle },
  ];

  return (
    <div className="h-screen w-64 fixed left-0 top-0 bg-gradient-to-b from-purple-600 to-purple-800 text-white p-4 flex flex-col">
      <div className="mb-8 pl-2">
        <Logo />
      </div>
      
      <div className="flex-1">
        <nav>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:bg-white/10'
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
      
      <div className="pt-4 border-t border-white/20">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-white/80 hover:bg-white/10 transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-white/80 hover:bg-white/10 transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
