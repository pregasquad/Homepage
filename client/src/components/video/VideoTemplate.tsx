import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { LogoScene } from './video_scenes/LogoScene';
import { SplitScene } from './video_scenes/SplitScene';
import { FinalScene } from './video_scenes/FinalScene';
import { useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';

const SCENE_DURATIONS = {
  intro: 3500,
  split: 999999999, // Effectively stop here
  final: 0,
};

function VideoContent() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <AnimatePresence mode="wait">
      {currentScene === 0 && <LogoScene key="intro" />}
      {currentScene === 1 && <SplitScene key="split" />}
      {currentScene === 2 && <FinalScene key="final" />}
    </AnimatePresence>
  );
}

export default function VideoTemplate() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ backgroundColor: 'black' }}
    >
      <audio
        ref={audioRef}
        loop
        src="https://archive.org/download/SpaMusicRelaxationMusicForStressReliefMusicForSpaRelaxingMusicSpaMusic3280C/1%20Hour%20of%20Japanese%20Spa%20Music%20%20Zen%20Music.ogg"
        style={{ display: 'none' }}
      />
      
      {!started && (
        <motion.div 
          className="absolute inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
          onClick={handleStart}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <Volume2 className="w-8 h-8 text-white/80" />
            </div>
            <p className="text-white/60 font-body tracking-[0.2em] uppercase text-sm">Tap to Enter Experience</p>
          </motion.div>
        </motion.div>
      )}

      {started && <VideoContent />}
    </div>
  );
}
