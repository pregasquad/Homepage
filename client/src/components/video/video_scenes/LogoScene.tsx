import { motion } from 'framer-motion';
import menLogo from '@/assets/IMG_4358_1771538435296.jpeg';
import womenLogo from '@/assets/IMG_4806_1771538435296.jpeg';

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
      
      <div className="flex gap-[3vw] mb-[4vw]">
        <motion.img
          src={menLogo}
          initial={{ x: '-5vw', opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          className="w-[12vw] h-[12vw] rounded-full border-[0.4vw] border-[#ff4500] shadow-[0_0_30px_rgba(255,69,0,0.3)]"
        />
        <motion.img
          src={womenLogo}
          initial={{ x: '5vw', opacity: 0, rotate: 10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          className="w-[12vw] h-[12vw] rounded-full border-[0.4vw] border-[#ff1493] shadow-[0_0_30px_rgba(255,20,147,0.3)]"
        />
      </div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-[12vw] font-bold tracking-tighter text-white font-display text-center leading-none relative z-10"
      >
        <span className="inline-block bg-gradient-to-br from-[#ff4500] via-[#ff4500] to-[#ff8c00] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,69,0,0.5)]">PREGA</span>
        <br />
        <span className="inline-block bg-gradient-to-br from-[#ff1493] via-[#ff1493] to-[#ff69b4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,20,147,0.5)]">SQUAD</span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-[20vw] h-[0.3vw] bg-gradient-to-r from-[#ff4500] to-[#ff1493] mt-[3vw] origin-center"
      />
    </motion.div>
  );
};
