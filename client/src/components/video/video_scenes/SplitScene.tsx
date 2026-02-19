import { motion } from 'framer-motion';
import menLogo from '@/assets/IMG_4358_1771538435296.jpeg';
import womenLogo from '@/assets/IMG_4806_1771538435296.jpeg';
import menBg from '@/assets/images/men-salon.png';
import womenBg from '@/assets/images/women-salon.png';

export const SplitScene = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Left Side - Men (Orange) */}
      <motion.div 
        className="relative w-1/2 h-full overflow-hidden border-r border-white/10 cursor-pointer"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => window.open('https://pregasquad.koyeb.app/booking', '_blank')}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img 
          src={menBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Men's Salon"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-[5vw]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-[6vw] font-bold text-white mb-[0.5vw] font-display drop-shadow-lg">PREGA MEN</h2>
            <p className="text-[1.5vw] text-white/90 font-body tracking-[0.2em] uppercase drop-shadow-md">BE HUMBLE • ELITE CUTS</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Women (Pink) */}
      <motion.div 
        className="relative w-1/2 h-full overflow-hidden cursor-pointer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => window.open('https://pregasquad.koyeb.app/booking', '_blank')}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img 
          src={womenBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Women's Salon"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#ff1493]/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end items-end p-[5vw] text-right">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-[6vw] font-bold text-white mb-[0.5vw] font-display drop-shadow-lg">PREGA GIRL</h2>
            <p className="text-[1.5vw] text-white/90 font-body tracking-[0.2em] uppercase drop-shadow-md">GLOW AND BEYOND</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Message */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      >
        <div className="bg-black/40 backdrop-blur-md px-[4vw] py-[2vw] rounded-full border border-white/20 shadow-2xl">
          <h3 className="text-white text-[2vw] font-bold font-display tracking-widest uppercase text-center drop-shadow-lg">
            Select Your Experience
          </h3>
        </div>
      </motion.div>

      {/* Persistent Logos floating in corners */}
      <motion.img 
        src={menLogo} 
        className="absolute top-[3vw] left-[3vw] w-[12vw] h-[12vw] rounded-full border-[0.3vw] border-[#ff4500] z-20 shadow-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.img 
        src={womenLogo} 
        className="absolute top-[3vw] right-[3vw] w-[12vw] h-[12vw] rounded-full border-[0.3vw] border-[#ff1493] z-20 shadow-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7 }}
      />
    </motion.div>
  );
};
