import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1E1E1C]"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1.2, ease: "easeInOut" } 
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Minimalist Logo Mark */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#7A9E82]/30 bg-[#7A9E82]/10">
              <span className="font-serif text-3xl italic text-[#B87040]">JR</span>
              
              {/* Spinning border ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-t-2 border-[#7A9E82]"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <motion.h2 
                className="font-serif text-2xl tracking-widest text-[#F9F6F1]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                JENNIFER RANKIN
              </motion.h2>
              <motion.p 
                className="font-sans text-xs uppercase tracking-[0.3em] text-[#7A9E82]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Therapy & Counseling
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
