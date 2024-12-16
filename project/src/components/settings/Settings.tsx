

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      <label className="block mt-4">
        <input type="checkbox" className="mr-2" /> Enable Notifications
      </label>
      <label className="block mt-2">
        <input type="checkbox" className="mr-2" /> Dark Mode
      </label>
    </div>
  );
};

export default Settings;
