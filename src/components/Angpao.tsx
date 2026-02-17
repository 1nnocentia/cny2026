import React from 'react';
import { motion } from 'framer-motion';

interface AngpaoProps {
  onClick: () => void;
}

export const Angpao: React.FC<AngpaoProps> = ({ onClick }) => {
  return (
    <motion.div
      className="relative cursor-pointer group"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5 }}
    >
      {/* Envelope Body */}
      <div className="w-72 h-96 bg-linear-to-b from-[#8B0000] to-[#500000] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden border border-yellow-600/30 ring-1 ring-black">
        
        {/* Scale Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 50% 50%, #000 2px, transparent 2.5px)', 
               backgroundSize: '12px 12px' 
             }}>
        </div>

        {/* Top Flap */}
        <div className="absolute top-0 left-0 w-full h-32 bg-[#A52A2A] z-10 origin-top transform group-hover:scale-y-105 transition-transform duration-300 shadow-lg border-b border-black/20"
             style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20"></div>
          {/* Gold Trim on Flap */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-yellow-500/30"></div>
        </div>

        {/* The Fire Horse Seal Container */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20">
          <motion.div 
            className="w-28 h-28 rounded-full bg-linear-to-br from-[#FFD700] via-[#FFA500] to-[#B8860B] shadow-2xl flex items-center justify-center border-[3px] border-[#FFD700]"
            animate={{ 
              boxShadow: ["0 0 15px rgba(255, 69, 0, 0.4)", "0 0 30px rgba(255, 215, 0, 0.6)", "0 0 15px rgba(255, 69, 0, 0.4)"] 
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="relative text-center flex flex-col items-center justify-center w-full h-full rounded-full overflow-hidden bg-red-900/10">

              {/* Horse Emoji */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-5xl filter drop-shadow-lg transform -translate-y-1">🐎</span>
              </div>

              {/* Text Ring */}
              <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                <path id="curve" d="M 20, 50 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="transparent" />
                <text className="text-[8px] font-bold fill-red-900 uppercase tracking-widest" style={{ fontFamily: 'Cinzel' }}>
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  • 丙午 • Fire Horse • 丙午 •
                  </textPath>
                </text>
              </svg>

            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Pattern */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center items-end opacity-40">
           <div className="w-px h-24 bg-linear-to-t from-yellow-500 to-transparent mx-1"></div>
           <div className="w-px h-16 bg-linear-to-t from-yellow-500 to-transparent mx-1"></div>
           <div className="w-px h-24 bg-linear-to-t from-yellow-500 to-transparent mx-1"></div>
        </div>

        <div className="absolute bottom-4 w-full text-center">
            <span className="text-yellow-500/60 text-[10px] font-slytherin tracking-[0.3em] border-t border-b border-yellow-500/20 py-1 px-4">
                OPEN IF YOU DARE
            </span>
        </div>
      </div>
    </motion.div>
  );
};