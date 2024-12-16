import React from 'react';
import { Users, Waves, Activity, AlertTriangle } from 'lucide-react';
import StatCard from './dashboard/StatCard';
import ChemicalLevels from './dashboard/ChemicalLevels';
import UpcomingReservations from './dashboard/UpcomingReservations';

const Dashboard = () => {
  const stats = [
    { title: 'Active Users', value: '124', icon: Users, color: 'bg-blue-500' },
    { title: 'Today\'s Reservations', value: '28', icon: Waves, color: 'bg-green-500' },
    { title: 'Maintenance Tasks', value: '5', icon: Activity, color: 'bg-purple-500' },
    { title: 'Chemical Alerts', value: '2', icon: AlertTriangle, color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingReservations />
        <ChemicalLevels />
      </div>
    </div>
  );
};

export default Dashboard;