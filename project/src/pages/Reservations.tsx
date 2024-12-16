import React, { useState } from 'react';
import { Calendar, Clock, Users, X } from 'lucide-react';

interface Reservation {
  id: string;
  date: string;
  timeSlot: string;
  guests: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const Reservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: '1',
      date: '2024-03-20',
      timeSlot: '10:00 AM - 12:00 PM',
      guests: 3,
      status: 'confirmed',
    },
    {
      id: '2',
      date: '2024-03-22',
      timeSlot: '2:00 PM - 4:00 PM',
      guests: 2,
      status: 'pending',
    },
  ]);

  const [showNewReservation, setShowNewReservation] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Reservations</h1>
        <button
          onClick={() => setShowNewReservation(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          New Reservation
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 space-y-6">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{reservation.date}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {reservation.timeSlot}
                    <Users className="w-4 h-4 ml-3 mr-1" />
                    {reservation.guests} guests
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    reservation.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : reservation.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {reservation.status}
                </span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Reservation Modal */}
      {showNewReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">New Reservation</h2>
              <button
                onClick={() => setShowNewReservation(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input type="date" className="w-full p-2.5 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Slot
                </label>
                <select className="w-full p-2.5 border rounded-lg">
                  <option>10:00 AM - 12:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 6:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests
                </label>
                <input type="number" min="1" className="w-full p-2.5 border rounded-lg" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
              >
                Create Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservations;