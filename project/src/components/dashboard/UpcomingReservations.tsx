import React from 'react';

const UpcomingReservations: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Upcoming Reservations</h3>
      <div className="space-y-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Today, 2:00 PM</p>
            </div>
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
              Confirmed
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingReservations;