import React from 'react';

interface ChemicalLevel {
  name: string;
  level: number;
  status: 'normal' | 'high' | 'low';
}

const ChemicalLevels: React.FC = () => {
  const chemicals: ChemicalLevel[] = [
    { name: 'Chlorine', level: 75, status: 'normal' },
    { name: 'pH Level', level: 90, status: 'high' },
    { name: 'Alkalinity', level: 60, status: 'normal' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Chemical Levels</h3>
      <div className="space-y-4">
        {chemicals.map((chemical, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{chemical.name}</span>
              <span className={`text-sm ${
                chemical.status === 'normal' ? 'text-green-500' : 'text-red-500'
              }`}>
                {chemical.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  chemical.status === 'normal' ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${chemical.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChemicalLevels;