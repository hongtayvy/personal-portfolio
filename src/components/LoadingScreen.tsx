import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-bold mb-8 tracking-tight">
          <span className="inline-block animate-pulse">V</span>
          <span className="inline-block animate-pulse delay-100">Y</span>
        </div>
        <div className="w-64 h-0.5 bg-gray-800 mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-sm tracking-wider opacity-50">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;