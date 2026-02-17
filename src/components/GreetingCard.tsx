import React from 'react';
import { motion } from 'framer-motion';
import innoImage from '../assets/inno.jpeg';

export const GreetingCard: React.FC = () => {
  return (
    <motion.div
      className="relative max-w-md w-full mx-4 p-0.5 rounded-2xl bg-linear-to-br from-[#2F4433] via-[#44624A] to-silver-400"
      initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
    >
      <div className="bg-[#111a13] rounded-2xl p-8 text-center border border-[#44624A]/50 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#44624A]/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/10 blur-3xl rounded-full"></div>

        <motion.div 
          className="relative mx-auto w-40 h-40 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#44624A]/30 rounded-full blur-xl animate-pulse"></div>
          <img 
            src={innoImage} 
            alt="Profile Picture" 
            className="w-full h-full object-cover rounded-full border-4 border-[#44624A] shadow-lg relative z-10 bg-white"
          />
          <div className="absolute -bottom-2 -right-2 bg-red-600 text-yellow-300 text-xs font-bold px-2 py-1 rounded-full border border-yellow-400 z-20">
            恭喜发财
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-3xl font-chinese text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-red-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Happy Chinese New Year
        </motion.h1>

        {/* Message */}
        <motion.p 
          className="text-gray-300 font-slytherin text-sm md:text-base leading-relaxed italic mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          "Let the New Year be the start of your exciting, new experiences and cherished moments."
        </motion.p>

        {/* Signature */}
        <motion.div 
          className="flex justify-end items-center mt-4 border-t border-[#1A261D] pt-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-right">
             <p className="text-[10px] text-[#44624A] uppercase tracking-widest font-bold">From</p>
             <p className="text-sm font-serif text-silver-400 text-gray-200">Han Inno</p>
          </div>
        </motion.div>

        {/* Decorative element */}
        <svg className="absolute bottom-0 left-0 w-16 h-16 text-[#44624A]/30 z-0 rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      </div>
    </motion.div>
  );
};