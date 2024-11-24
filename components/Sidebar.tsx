import React, { useState } from 'react';
import { Bell, Settings, LayoutDashboard, Book } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Stories', icon: Book },
    { name: 'Notifications', icon: Bell },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className={`h-screen w-64 bg-[#393939] p-4 flex flex-col ${inter.className}`}>
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-8 mt-4">
        <div className="w-12 h-12 bg-[#d9d9d9] rounded-lg"></div>
        <span className="text-white text-lg">Name</span>
      </div>

      {/* Balance Card */}
      <div className="bg-zinc-800 p-4 rounded-lg mb-8 text-center">
        <h2 className="text-white mb-2">Current balance</h2>
       <div className='flex items-center justify-center gap-1 mb-1'>
       <div className="w-6 h-6 bg-[#d9d9d9]"></div>
       <div className="text-white text-xl">4.09685 Unit</div>
       </div>
        <div className="flex gap-3 mb-4 justify-center items-center">
          <span className="text-red-500">-111.23 ↓</span>
          <span className="text-green-500">+11.23 ↑</span>
        </div>
        <button className="w-full bg-yellow-100 hover:bg-yellow-200 text-black py-2 rounded-full transition-colors">
          Recharge
        </button>
      </div>

      {/* Navigation Menu */}
      <div>
        <h2 className="text-zinc-100 mb-4 ml-6">Menu</h2>
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;
            
            return (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`
                  flex items-center gap-3 p-2 rounded-lg transition-colors relative
                  ${isActive ? 'text-yellow-100' : 'text-white hover:bg-zinc-800'}
                `}
              >
                {isActive && (
                  <div className="absolute left-0 w-2 h-2 bg-yellow-100 rounded-full" />
                )}
                <div className="ml-4">
                  <Icon size={20} />
                </div>
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;