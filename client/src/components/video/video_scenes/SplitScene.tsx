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
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          alt="Men's Salon"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500]/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
          <motion.img 
            src={menLogo}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-[#ff4500] mb-8 shadow-2xl"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-[6vw] md:text-[4vw] font-bold text-[#ff4500] mb-2 font-display">PREGA MEN</h2>
            <p className="text-[2vw] md:text-[1vw] text-white/80 font-body tracking-[0.2em] uppercase">BE HUMBLE • ELITE CUTS</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Women (Pink) */}
      <motion.div 
        className="relative w-1/2 h-full overflow-hidden"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src={womenBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          alt="Women's Salon"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#ff1493]/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
          <motion.img 
            src={womenLogo}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-[#ff1493] mb-8 shadow-2xl"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-[6vw] md:text-[4vw] font-bold text-[#ff1493] mb-2 font-display">PREGA GIRL</h2>
            <p className="text-[2vw] md:text-[1vw] text-white/80 font-body tracking-[0.2em] uppercase">GLOW AND BEYOND</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
