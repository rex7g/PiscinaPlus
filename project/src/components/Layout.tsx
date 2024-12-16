import React from 'react';
import { Menu, User, Calendar, Settings, Bell, LogOut, Activity, BarChart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">AquaManager</h1>
        </div>
        
        <nav className="flex-1 py-6">
          <div className="px-4 space-y-2">
            {[
              { icon: Calendar, text: 'Reservations', path: '/reservations' },
              { icon: User, text: 'Profile', path: '/profile' },
              { icon: Activity, text: 'Maintenance', path: '/maintenance' },
              { icon: Bell, text: 'Notifications', path: '/notifications' },
              { icon: BarChart, text: 'Statistics', path: '/statistics' },
              { icon: Settings, text: 'Settings', path: '/settings' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.text}
              </a>
            ))}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg">
              <LogOut className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;