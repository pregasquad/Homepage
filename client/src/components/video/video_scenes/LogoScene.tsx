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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ff4500,transparent_70%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#ff1493,transparent_60%)] opacity-20" />
      </div>
      
      <div className="flex gap-[2vw] mb-[3vw]">
        <motion.img
          src={menLogo}
          initial={{ x: '-5vw', opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          className="w-[10vw] h-[10vw] rounded-full border-[0.3vw] border-[#ff4500] shadow-[0_0_30px_rgba(255,69,0,0.3)]"
        />
        <motion.img
          src={womenLogo}
          initial={{ x: '5vw', opacity: 0, rotate: 10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          className="w-[10vw] h-[10vw] rounded-full border-[0.3vw] border-[#ff1493] shadow-[0_0_30px_rgba(255,20,147,0.3)]"
        />
      </div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-[8vw] font-bold tracking-tighter text-white font-display text-center leading-none"
      >
        PREGA<br />SQUAD
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-[15vw] h-[0.2vw] bg-gradient-to-r from-[#ff4500] to-[#ff1493] mt-[2vw] origin-center"
      />
    </motion.div>
  );
};
