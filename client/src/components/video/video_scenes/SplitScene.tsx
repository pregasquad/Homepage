import { motion } from 'framer-motion';
import menLogo from '@/assets/IMG_4358_1771538435296.jpeg';
import womenLogo from '@/assets/IMG_4806_1771538435296.jpeg';
import menBg from '@/assets/images/men-salon.png';
import womenBg from '@/assets/images/women-salon.png';
import { useAudio } from '../AudioContext';
import { Play } from 'lucide-react';

const DRAKE_URL = "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/97/03/b0970351-ac8c-2f17-b24d-ad89d140a084/mzaf_17846596306163950808.plus.aac.p.m4a";
const TYLA_URL = "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fe/8d/7d/fe8d7d3b-92e3-402f-e233-2552f9140d1f/mzaf_2963416071105292265.plus.aac.p.m4a";

export const SplitScene = () => {
  const { setTrack, currentTrack } = useAudio();

  const isDrakePlaying = currentTrack === DRAKE_URL;
  const isTylaPlaying = currentTrack === TYLA_URL;

  return (
    <motion.div 
      className="absolute inset-0 flex overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Left Side - Men (Orange) */}
      <motion.div 
        className="relative w-1/2 h-full overflow-hidden border-r border-white/10 cursor-pointer group"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setTrack(DRAKE_URL)}
      >
        <motion.img 
          src={menBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Men's Salon"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-[#ff4500]/60 via-transparent to-transparent transition-opacity duration-500 ${isDrakePlaying ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`} />
        
        <div className="absolute inset-0 flex flex-col justify-end p-[5vw] z-10 pb-[20vh]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-[6vw] font-bold text-white mb-[0.5vw] font-display drop-shadow-lg">PREGA MEN</h2>
            <p className="text-[1.5vw] text-white/90 font-body tracking-[0.2em] uppercase drop-shadow-md">BE HUMBLE • ELITE CUTS</p>
            <div className="flex items-center gap-2 mt-4 text-white/80">
               <Play className={`w-4 h-4 ${isDrakePlaying ? 'fill-white' : ''}`} />
               <span className="text-xs uppercase tracking-widest">{isDrakePlaying ? 'Now Playing' : 'Play Drake - Nonstop'}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Women (Pink) */}
      <motion.div 
        className="relative w-1/2 h-full overflow-hidden cursor-pointer group"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setTrack(TYLA_URL)}
      >
        <motion.img 
          src={womenBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Women's Salon"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
        <div className={`absolute inset-0 bg-gradient-to-l from-[#ff1493]/60 via-transparent to-transparent transition-opacity duration-500 ${isTylaPlaying ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`} />
        
        <div className="absolute inset-0 flex flex-col justify-end items-end p-[5vw] text-right z-10 pb-[20vh]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-[6vw] font-bold text-white mb-[0.5vw] font-display drop-shadow-lg">PREGA GIRL</h2>
            <p className="text-[1.5vw] text-white/90 font-body tracking-[0.2em] uppercase drop-shadow-md">GLOW AND BEYOND</p>
            <div className="flex items-center gap-2 mt-4 text-white/80 justify-end">
               <span className="text-xs uppercase tracking-widest">{isTylaPlaying ? 'Now Playing' : 'Play Tyla - Chanel'}</span>
               <Play className={`w-4 h-4 ${isTylaPlaying ? 'fill-white' : ''}`} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Message */}
      <motion.div 
        className="absolute top-[15%] left-0 right-0 flex items-center justify-center pointer-events-none z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      >
        <div className="bg-black/40 backdrop-blur-md px-[3vw] py-[1vw] rounded-full border border-white/20 shadow-2xl">
          <h3 className="text-white text-[1.5vw] font-bold font-display tracking-widest uppercase text-center drop-shadow-lg">
            Tap sides to change vibe
          </h3>
        </div>
      </motion.div>

      {/* Book Now Button (Bottom Center) */}
      <motion.div
        className="absolute bottom-[15vh] left-0 right-0 flex justify-center z-40 pointer-events-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <button 
          onClick={() => window.open('https://pregasquad.koyeb.app/booking', '_blank')}
          className="group relative px-[4vw] py-[1.2vw] bg-white text-black font-bold uppercase tracking-widest text-[1.5vw] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Book Appointment</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500] to-[#ff1493] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </motion.div>

      {/* Persistent Logos floating in corners */}
      <motion.img 
        src={menLogo} 
        className="absolute top-[3vw] left-[3vw] w-[8vw] h-[8vw] rounded-full border-[0.2vw] border-[#ff4500] z-20 shadow-xl opacity-80"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.img 
        src={womenLogo} 
        className="absolute top-[3vw] right-[3vw] w-[8vw] h-[8vw] rounded-full border-[0.2vw] border-[#ff1493] z-20 shadow-xl opacity-80"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ delay: 1.7 }}
      />
    </motion.div>
  );
};
