

const Maintenance = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">Maintenance Tasks</h2>
      <ul className="space-y-2 mt-4">
        <li className="border p-3 rounded">Task 1: Clean Filters</li>
        <li className="border p-3 rounded">Task 2: Check pH Levels</li>
        <li className="border p-3 rounded">Task 3: Add Chlorine</li>
      </ul>
      <button className="bg-green-500 text-white mt-4 p-2 rounded">Add New Task</button>
    </div>
  );
};

export default Maintenance;
