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
        className="relative w-1/2 h-full overflow-hidden border-r border-white/10"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src={menBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700"
          alt="Men's Salon"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-[6vw] md:text-[4vw] font-bold text-white mb-2 font-display drop-shadow-lg">PREGA MEN</h2>
            <p className="text-[2vw] md:text-[1vw] text-white/90 font-body tracking-[0.2em] uppercase drop-shadow-md">BE HUMBLE • ELITE CUTS</p>
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
        <img 
          src={womenBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700"
          alt="Women's Salon"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#ff1493]/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end items-end p-12 text-right">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-[6vw] md:text-[4vw] font-bold text-white mb-2 font-display drop-shadow-lg">PREGA GIRL</h2>
            <p className="text-[2vw] md:text-[1vw] text-white/90 font-body tracking-[0.2em] uppercase drop-shadow-md">GLOW AND BEYOND</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Persistent Logos floating in corners */}
      <motion.img 
        src={menLogo} 
        className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#ff4500] z-20 shadow-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.img 
        src={womenLogo} 
        className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#ff1493] z-20 shadow-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7 }}
      />
    </motion.div>
  );
};
