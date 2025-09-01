```tsx
'use client';

import React from 'react';

interface RoadProps {
  currentStop: number;
  totalStops: number;
}

const Road: React.FC<RoadProps> = ({ currentStop, totalStops }) => {
  const stops = Array.from({ length: totalStops }, (_, i) => i);

  return (
    <div className="relative w-full h-32 bg-gradient-to-b from-green-400 to-green-600 overflow-hidden">
      {/* Sky background */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-300 to-blue-400"></div>
      
      {/* Mountains/Hills in background */}
      <div className="absolute top-8 left-0 w-full h-12">
        <div className="absolute top-4 left-10 w-20 h-8 bg-green-600 rounded-full opacity-60"></div>
        <div className="absolute top-2 left-32 w-24 h-10 bg-green-700 rounded-full opacity-50"></div>
        <div className="absolute top-6 right-20 w-16 h-6 bg-green-600 rounded-full opacity-60"></div>
      </div>

      {/* Main road */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-700">
        {/* Road texture */}
        <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800"></div>
        
        {/* Center line dashes */}
        <div className="absolute top-1/2 left-0 w-full h-1 flex items-center justify-center transform -translate-y-1/2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-1 bg-yellow-300 mx-2"
              style={{ opacity: 0.9 }}
            ></div>
          ))}
        </div>

        {/* Road edges */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-60"></div>
      </div>

      {/* Bus stops */}
      {stops.map((stop) => (
        <div
          key={stop}
          className="absolute bottom-16 transform -translate-x-1/2"
          style={{
            left: `${(stop + 1) * (100 / (totalStops + 1))}%`,
          }}
        >
          {/* Stop pole */}
          <div className="w-2 h-12 bg-gray-800 mx-auto"></div>
          
          {/* Stop sign */}
          <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center text-white font-bold text-xs transform -translate-y-2 ${
            currentStop === stop 
              ? 'bg-red-500 border-red-600 animate-pulse' 
              : 'bg-blue-500 border-blue-600'
          }`}>
            {stop + 1}
          </div>

          {/* Stop platform */}
          <div className="w-12 h-2 bg-gray-600 mx-auto transform translate-y-2"></div>
          
          {/* Progress indicator */}
          {currentStop >= stop && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          )}
        </div>
      ))}

      {/* Road progress line */}
      <div className="absolute bottom-20 left-0 w-full h-1">
        <div className="w-full h-full bg-gray-400 opacity-50"></div>
        <div 
          className="h-full bg-yellow-400 transition-all duration-1000 ease-in-out"
          style={{
            width: `${((currentStop + 1) / totalStops) * 100}%`
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-3 h-6 bg-green-800 rounded-t-full"></div>
      <div className="absolute top-18 left-6 w-4 h-4 bg-green-600 rounded-full"></div>
      
      <div className="absolute top-22 right-10 w-2 h-4 bg-green-800 rounded-t-full"></div>
      <div className="absolute top-20 right-11 w-3 h-3 bg-green-600 rounded-full"></div>

      {/* Clouds */}
      <div className="absolute top-2 left-1/4 w-8 h-4 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-1 left-1/4 w-6 h-3 bg-white rounded-full opacity-70 ml-2"></div>
      
      <div className="absolute top-3 right-1/3 w-6 h-3 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-2 right-1/3 w-4 h-2 bg-white rounded-full opacity-60 mr-1"></div>
    </div>
  );
};

export default Road;
```

To save this to your local drive:

1. **Download the project files**: After I create all the files, you can download them by clicking the download button in the file explorer
2. **Copy individual files**: You can copy the content of each file and paste it into your local code editor
3. **Clone/Export**: Once complete, you can export the entire project structure to your local machine
4. **Run locally**: Navigate to the project folder and run `npm install` then `npm run dev` to start the development server

Would you like me to continue creating the other components and complete the full project?