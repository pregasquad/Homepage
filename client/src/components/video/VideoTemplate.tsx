import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { LogoScene } from './video_scenes/LogoScene';
import { SplitScene } from './video_scenes/SplitScene';
import { FinalScene } from './video_scenes/FinalScene';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

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
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to auto-play audio on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Auto-play started successfully
            setIsMuted(false);
          })
          .catch((error) => {
            // Auto-play was prevented
            console.log("Audio autoplay prevented:", error);
            setIsMuted(true);
          });
      }
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play()
          .then(() => setIsMuted(false))
          .catch(e => console.error("Play failed:", e));
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden bg-black"
    >
      <audio
        ref={audioRef}
        loop
        src="https://archive.org/download/SpaMusicRelaxationMusicForStressReliefMusicForSpaRelaxingMusicSpaMusic3280C/1%20Hour%20of%20Japanese%20Spa%20Music%20%20Zen%20Music.ogg"
        style={{ display: 'none' }}
      />
      
      <VideoContent />

      {/* Subtle audio control button */}
      <motion.button
        className="absolute bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-black/40 transition-colors"
        onClick={toggleMute}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-5 h-5" />
            <span className="text-xs font-medium tracking-wider uppercase">Unmute</span>
          </>
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
}
