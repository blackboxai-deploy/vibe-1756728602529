```tsx
'use client';

import React from 'react';

interface JeepneyProps {
  currentStop: number;
  isMoving: boolean;
  totalStops: number;
}

const Jeepney: React.FC<JeepneyProps> = ({ currentStop, isMoving, totalStops }) => {
  const getJeepneyPosition = () => {
    const roadWidth = 100; // percentage
    const stopSpacing = roadWidth / (totalStops - 1);
    return Math.min(currentStop * stopSpacing, roadWidth - 10);
  };

  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-2000 ease-in-out z-20 ${
        isMoving ? 'animate-bounce' : ''
      }`}
      style={{
        left: `${getJeepneyPosition()}%`,
        transform: 'translateY(-50%)',
      }}
    >
      <div className="relative">
        {/* Jeepney Body */}
        <div className="w-20 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg relative">
          {/* Jeepney Front */}
          <div className="absolute -left-2 top-1 w-4 h-10 bg-blue-700 rounded-l-lg"></div>
          
          {/* Jeepney Windows */}
          <div className="absolute top-1 left-1 w-16 h-4 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded opacity-80"></div>
          
          {/* Jeepney Side Windows */}
          <div className="absolute top-6 left-2 w-3 h-2 bg-cyan-200 rounded opacity-80"></div>
          <div className="absolute top-6 left-6 w-3 h-2 bg-cyan-200 rounded opacity-80"></div>
          <div className="absolute top-6 left-10 w-3 h-2 bg-cyan-200 rounded opacity-80"></div>
          <div className="absolute top-6 left-14 w-3 h-2 bg-cyan-200 rounded opacity-80"></div>
          
          {/* Jeepney Decorations */}
          <div className="absolute top-2 left-3 w-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-2 left-5 w-1 h-1 bg-red-500 rounded-full"></div>
          <div className="absolute top-2 left-7 w-1 h-1 bg-green-500 rounded-full"></div>
          
          {/* Philippine Flag Colors Stripe */}
          <div className="absolute bottom-1 left-1 w-16 h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400 rounded"></div>
        </div>
        
        {/* Wheels */}
        <div className="absolute -bottom-2 left-1 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600">
          <div className="absolute inset-1 bg-gray-600 rounded-full"></div>
          <div className="absolute inset-2 bg-gray-400 rounded-full"></div>
        </div>
        <div className="absolute -bottom-2 right-1 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600">
          <div className="absolute inset-1 bg-gray-600 rounded-full"></div>
          <div className="absolute inset-2 bg-gray-400 rounded-full"></div>
        </div>
        
        {/* Exhaust Smoke (when moving) */}
        {isMoving && (
          <div className="absolute -right-4 top-2 animate-pulse">
            <div className="w-2 h-2 bg-gray-400 rounded-full opacity-60 animate-ping"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full opacity-40 animate-ping animation-delay-200 ml-1 -mt-1"></div>
          </div>
        )}
        
        {/* Jeepney Sign */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold text-blue-800 shadow-md">
          INVENTIONS
        </div>
        
        {/* Headlights */}
        <div className="absolute -left-1 top-3 w-1 h-2 bg-yellow-300 rounded-full opacity-80"></div>
        <div className="absolute -left-1 top-6 w-1 h-2 bg-yellow-300 rounded-full opacity-80"></div>
      </div>
    </div>
  );
};

export default Jeepney;
```

To save this to your local drive:

1. **Download the entire project**: After I create all the files, you can download the complete project as a ZIP file from the sandbox
2. **Copy individual files**: You can copy each file's content and create the files manually in your local React project
3. **Clone/Export**: Once complete, you can export the entire codebase to your local development environment

Would you like me to continue creating all the other components and pages for the complete Filipino inventions timeline website?