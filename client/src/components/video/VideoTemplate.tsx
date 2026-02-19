import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { LogoScene } from './video_scenes/LogoScene';
import { SplitScene } from './video_scenes/SplitScene';
import { FinalScene } from './video_scenes/FinalScene';

const SCENE_DURATIONS = {
  intro: 3500,
  split: 999999999, // Effectively stop here
  final: 0,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ backgroundColor: 'black' }}
    >
      <AnimatePresence mode="wait">
        {currentScene === 0 && <LogoScene key="intro" />}
        {currentScene === 1 && <SplitScene key="split" />}
        {currentScene === 2 && <FinalScene key="final" />}
      </AnimatePresence>
    </div>
  );
}
