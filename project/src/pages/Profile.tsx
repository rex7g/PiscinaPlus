import React, { useState } from 'react';
import { User, Mail, Phone, Camera } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 000-0000',
    notifications: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Profile Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="w-12 h-12 text-blue-600" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="ml-6">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full p-2.5 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full p-2.5 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full p-2.5 border rounded-lg"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              checked={profile.notifications}
              onChange={(e) => setProfile({ ...profile, notifications: e.target.checked })}
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor="notifications" className="ml-2 text-sm text-gray-700">
              Receive email notifications about reservations and maintenance
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;