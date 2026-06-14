"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Başlangıç ses seviyesi %30
    audio.volume = 0.3;

    const startAudio = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        // Ses başladıktan sonra dinleyicileri kaldır
        document.removeEventListener('click', startAudio);
        document.removeEventListener('touchstart', startAudio);
        document.removeEventListener('scroll', startAudio);
      }).catch(err => {
        console.log("Otomatik oynatma tarayıcı tarafından engellendi, etkileşim bekleniyor.");
      });
    };

    // İlk yüklemede dene
    startAudio();

    // Etkileşim dinleyicileri ekle (Auto-play engeli için)
    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);
    document.addEventListener('scroll', startAudio);

    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('scroll', startAudio);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-50 group">
      <audio
        ref={audioRef}
        src="/music/makara.mp3"
        loop
        preload="auto"
      />
      
      <button
        onClick={toggleMusic}
        className={cn(
          "relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 shadow-2xl overflow-hidden",
          isPlaying 
            ? "bg-primary text-white scale-110 shadow-primary/40" 
            : "bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-white/20"
        )}
        aria-label={isPlaying ? "Müziği Durdur" : "Müziği Başlat"}
      >
        {/* Hareketli Arka Plan Efekti (Çalarken) */}
        {isPlaying && (
          <span className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-primary animate-pulse" />
        )}

        {/* İkon */}
        <div className="relative z-10">
          {isPlaying ? (
            <Volume2 className="animate-pulse" size={24} />
          ) : (
            <VolumeX size={24} />
          )}
        </div>

        {/* Müzik Notası Animasyonu (Çalarken) */}
        {isPlaying && (
          <>
            <span className="absolute -top-1 left-2 text-[10px] animate-ping delay-75">♪</span>
            <span className="absolute top-2 -right-1 text-[10px] animate-ping delay-300">♫</span>
          </>
        )}
      </button>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        {isPlaying ? "Müziği Kapat" : "Müziği Aç"}
      </div>
    </div>
  );
}
