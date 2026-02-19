import { motion } from 'framer-motion';
import menLogo from '@/assets/IMG_4358_1771538435296.jpeg';
import womenLogo from '@/assets/IMG_4806_1771538435296.jpeg';
import menBg from '@/assets/images/men-salon.png';
import womenBg from '@/assets/images/women-salon.png';

export const FinalScene = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(100% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={menBg} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="" />
          <div className="absolute inset-0 bg-[#ff4500]/20" />
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={womenBg} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="" />
          <div className="absolute inset-0 bg-[#ff1493]/20" />
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        className="text-center z-10"
      >
        <div className="flex justify-center gap-[1.5vw] mb-[3vw]">
          <motion.img src={menLogo} className="w-[6vw] h-[6vw] rounded-full border-[0.2vw] border-[#ff4500] shadow-[0_0_20px_rgba(255,69,0,0.5)]" />
          <motion.img src={womenLogo} className="w-[6vw] h-[6vw] rounded-full border-[0.2vw] border-[#ff1493] shadow-[0_0_20px_rgba(255,20,147,0.5)]" />
        </div>
        
        <h3 className="text-white/80 text-[1.5vw] font-body tracking-[0.4em] uppercase mb-[1vw] italic">Join the Squad</h3>
        <h1 className="text-white text-[7vw] font-bold font-display mb-[3vw] tracking-tighter drop-shadow-2xl">
          PREGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-[#ff1493]">SQUAD</span>
        </h1>
        
        <div className="flex gap-[2vw] justify-center items-center">
          <div className="w-[6vw] h-px bg-gradient-to-r from-transparent to-white/40" />
          <div className="text-white/60 text-[0.8vw] tracking-[0.3em] uppercase font-mono">EST • 2026</div>
          <div className="w-[6vw] h-px bg-gradient-to-l from-transparent to-white/40" />
        </div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <h2 className="text-[30vw] font-bold text-white whitespace-nowrap">SQUAD</h2>
      </div>
    </motion.div>
  );
};
