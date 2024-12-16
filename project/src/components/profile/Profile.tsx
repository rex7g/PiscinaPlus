

const Profile = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
      <div>
        <label className="block mb-1">Name</label>
        <input type="text" className="border p-2 rounded w-full" placeholder="John Doe" />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" className="border p-2 rounded w-full" placeholder="john@example.com" />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
    </div>
  );
};

export default Profile;
