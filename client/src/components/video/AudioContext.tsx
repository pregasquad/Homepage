import { createContext, useContext, useState, useRef, ReactNode, useEffect } from 'react';

type AudioContextType = {
  isMuted: boolean;
  toggleMute: () => void;
  setTrack: (url: string) => void;
  currentTrack: string;
};

const defaultTrack = "https://archive.org/download/SpaMusicRelaxationMusicForStressReliefMusicForSpaRelaxingMusicSpaMusic3280C/1%20Hour%20of%20Japanese%20Spa%20Music%20%20Zen%20Music.ogg";

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(defaultTrack);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(currentTrack);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Try auto-play
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsMuted(false))
        .catch(error => {
          console.log("Autoplay prevented:", error);
          setIsMuted(true);
        });
    }

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []); // Only run once on mount

  // Effect to handle track changes
  useEffect(() => {
    if (audioRef.current && audioRef.current.src !== currentTrack) {
      const wasPlaying = !audioRef.current.paused;
      audioRef.current.src = currentTrack;
      if (wasPlaying || !isMuted) {
        audioRef.current.play().catch(e => console.error("Play failed:", e));
      }
    }
  }, [currentTrack]);

  // Effect to handle mute changes
  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Play failed:", e));
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const setTrack = (url: string) => {
    setCurrentTrack(url);
    if (isMuted) setIsMuted(false); // Auto-unmute when user selects a track
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, setTrack, currentTrack }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
