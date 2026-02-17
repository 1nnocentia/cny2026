import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Angpao } from './components/Angpao';
import { GreetingCard } from './components/GreetingCard';
import { Background } from './components/Background';
import { triggerSlytherinConfetti } from './utils/confetti';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    triggerSlytherinConfetti();
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Background />
      
      <main className="relative z-10 flex flex-col items-center w-full px-4">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
                key="angpao"
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.5, rotate: 5, filter: "blur(10px)", transition: { duration: 0.4 } }}
            >
                <Angpao onClick={handleOpen} />
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-12 text-yellow-500/80 font-chinese text-2xl tracking-widest drop-shadow-lg select-none"
                >
                  点击打开
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                   className="text-[#44624A]/70 font-slytherin text-xs uppercase tracking-[0.3em] mt-2 select-none"
                >
                  Wishing You Prosperity
                </motion.p>
            </motion.div>
          ) : (
            <motion.div
                key="card"
                className="flex flex-col items-center justify-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <GreetingCard />
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 }}
                  onClick={() => setIsOpened(false)}
                  className="mt-10 px-6 py-2 border border-[#44624A] text-[#44624A] rounded-full hover:bg-[#44624A]/20 transition-all duration-300 font-slytherin text-[10px] tracking-widest uppercase"
                >
                  Close
                </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;