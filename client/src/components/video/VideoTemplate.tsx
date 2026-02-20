import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { LogoScene } from './video_scenes/LogoScene';
import { SplitScene } from './video_scenes/SplitScene';
import { FinalScene } from './video_scenes/FinalScene';
import { AudioProvider, useAudio } from './AudioContext';
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

function MuteButton() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <button
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/60 hover:text-white hover:bg-black/60 transition-colors cursor-pointer"
      onClick={toggleMute}
    >
      {isMuted ? (
        <>
          <VolumeX className="w-4 h-4" />
          <span className="text-[10px] font-medium tracking-wider uppercase">Unmute</span>
        </>
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}

export default function VideoTemplate() {
  return (
    <AudioProvider>
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
        <VideoContent />
        <MuteButton />
      </div>
    </AudioProvider>
  );
}
