import { motion } from 'framer-motion';
import { Scissors, Brush } from 'lucide-react';

export const LogoScene = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ff4500,transparent_70%)] opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#ff1493,transparent_60%)] opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex gap-[6vw] items-end justify-center mb-[4vw]">
          {/* Scissors & PREGA */}
          <motion.div className="flex flex-col items-center gap-[2vw]">
            <motion.div
              initial={{ scale: 30, opacity: 0, x: '-50vw', y: '-50vh' }}
              animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Scissors className="w-[15vw] h-[15vw] text-[#ff4500] drop-shadow-[0_0_30px_rgba(255,69,0,0.6)]" strokeWidth={1.5} />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-[8vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#ff4500] via-[#ff4500] to-[#ff8c00] font-display text-center leading-none drop-shadow-[0_0_30px_rgba(255,69,0,0.5)]"
            >
              PREGA
            </motion.h1>
          </motion.div>

          {/* Brush & SQUAD */}
          <motion.div className="flex flex-col items-center gap-[2vw]">
            <motion.div
              initial={{ scale: 30, opacity: 0, x: '50vw', y: '50vh' }}
              animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <Brush className="w-[15vw] h-[15vw] text-[#ff1493] drop-shadow-[0_0_30px_rgba(255,20,147,0.6)]" strokeWidth={1.5} />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-[8vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#ff1493] via-[#ff1493] to-[#ff69b4] font-display text-center leading-none drop-shadow-[0_0_30px_rgba(255,20,147,0.5)]"
            >
              SQUAD
            </motion.h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[40vw] h-[0.4vw] bg-gradient-to-r from-[#ff4500] to-[#ff1493] origin-center rounded-full"
        />
      </div>
    </motion.div>
  );
};
