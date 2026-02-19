import { motion } from 'framer-motion';
import menLogo from '@/assets/IMG_4358_1771538435296.jpeg';
import womenLogo from '@/assets/IMG_4806_1771538435296.jpeg';

export const FinalScene = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(100% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#ff4500] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[#ff1493] blur-[120px]" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        className="text-center z-10"
      >
        <div className="flex justify-center gap-6 mb-12">
          <motion.img src={menLogo} className="w-24 h-24 rounded-full border-2 border-[#ff4500]" />
          <motion.img src={womenLogo} className="w-24 h-24 rounded-full border-2 border-[#ff1493]" />
        </div>
        
        <h3 className="text-white/60 text-[3vw] md:text-[1.5vw] font-body tracking-[0.4em] uppercase mb-4 italic">Join the Squad</h3>
        <h1 className="text-white text-[10vw] md:text-[7vw] font-bold font-display mb-12 tracking-tighter">
          PREGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-[#ff1493]">SQUAD</span>
        </h1>
        
        <div className="flex gap-8 justify-center items-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-white/20" />
          <div className="text-white/40 text-sm tracking-[0.3em] uppercase font-mono">EST • 2026</div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[30vw] font-bold text-white whitespace-nowrap">SQUAD</h2>
      </div>
    </motion.div>
  );
};
