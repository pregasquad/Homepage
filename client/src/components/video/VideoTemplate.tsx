import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { LogoScene } from './video_scenes/LogoScene';
import { SplitScene } from './video_scenes/SplitScene';
import { FinalScene } from './video_scenes/FinalScene';
import { AudioProvider } from './AudioContext';

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
  return (
    <AudioProvider>
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
        <VideoContent />
      </div>
    </AudioProvider>
  );
}
