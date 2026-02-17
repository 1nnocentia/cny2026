import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#1A261D] via-[#05100a] to-[#000000]"></div>
      
      <div className="absolute top-0 left-10 w-1 bg-red-800/50 h-32 animate-swing origin-top">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-red-700/80 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.3)] flex items-center justify-center">
            <span className="text-yellow-500 font-chinese text-lg opacity-80">春</span>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-yellow-600/60"></div>
      </div>

      <div className="absolute top-0 right-10 w-1 bg-red-800/50 h-48 animate-swing-delayed origin-top">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-red-700/80 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.3)] flex items-center justify-center">
            <span className="text-yellow-500 font-chinese text-lg opacity-80">福</span>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-yellow-600/60"></div>
      </div>

      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
};