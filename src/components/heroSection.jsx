import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import heroVideo from '../assets/videos/JamSpread15Sec.webm';
import heroImg1 from '../assets/heroImg1.webp';
import heroImg2 from '../assets/heroImg2.webp';
import heroImg3 from '../assets/heroImg3.webp';

export default function HeroSection({ isDarkened }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  // ── IMAGE slides (active) ──────────────────────────────────
  // To revert to videos, comment this block and uncomment the videoSlides block below.
  const slides = [
    { id: 1, imageUrl: heroImg1 },
    { id: 2, imageUrl: heroImg2 },
    { id: 3, imageUrl: heroImg3 },
    { id: 4, imageUrl: heroImg1 },
    { id: 5, imageUrl: heroImg2 },
  ];

  // ── VIDEO slides (preserved for future use) ────────────────
  // const slides = [
  //   { id: 1, videoUrl: heroVideo },
  //   { id: 2, videoUrl: heroVideo },
  //   { id: 3, videoUrl: heroVideo },
  //   { id: 4, videoUrl: heroVideo },
  //   { id: 5, videoUrl: heroVideo },
  // ];

  // Plays/pauses videos when active index changes.
  // Preserved for future use when switching back to video slides.
  // useEffect(() => {
  //   videoRefs.current.forEach((video, index) => {
  //     if (video) {
  //       if (index === currentIndex) {
  //         video.currentTime = 0;
  //         const playPromise = video.play();
  //         if (playPromise !== undefined) {
  //           playPromise.catch(() => {});
  //         }
  //       } else {
  //         video.pause();
  //       }
  //     }
  //   });
  // }, [currentIndex]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isShowreelOpen) {
        if (e.key === 'Escape') setIsShowreelOpen(false);
        return;
      }
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isShowreelOpen]);

  return (
    <>
      <div
        className={`relative w-full overflow-hidden bg-white -mt-2 sm:-mt-4 md:-mt-20 pt-0 pb-6 sm:pb-5 flex flex-col items-center justify-center transition-all duration-300 ${
          isDarkened ? 'brightness-50 pointer-events-none blur-[1px]' : ''
        }`}
      >
        {/* Carousel Container */}
        <div className="relative w-full h-[320px] xs:h-[360px] sm:h-[clamp(370px,51vw,1600px)] flex items-center justify-center overflow-hidden px-6 sm:px-4 md:px-8">
          {slides.map((slide, index) => {
            let offset = index - currentIndex;
            if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
            if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            let transformStyle = 'opacity-0 pointer-events-none';

            if (isActive) {
              transformStyle = 'translate-x-0 scale-100 opacity-100 z-30';
            } else if (offset === -1) {
              transformStyle =
                '-translate-x-[72%] sm:-translate-x-[10.5%] scale-[0.82] sm:scale-[0.88] opacity-80 sm:opacity-100 z-20 cursor-pointer brightness-[0.55] sm:brightness-[0.70] hover:brightness-[0.82]';
            } else if (offset === 1) {
              transformStyle =
                'translate-x-[72%] sm:translate-x-[10.5%] scale-[0.82] sm:scale-[0.88] opacity-80 sm:opacity-100 z-20 cursor-pointer brightness-[0.55] sm:brightness-[0.70] hover:brightness-[0.82]';
            } else if (offset === -2) {
              transformStyle =
                'hidden sm:block -translate-x-[18%] sm:-translate-x-[20%] scale-[0.76] opacity-60 z-10 cursor-pointer brightness-[0.52] hover:brightness-[0.66]';
            } else if (offset === 2) {
              transformStyle =
                'hidden sm:block translate-x-[18%] sm:translate-x-[20%] scale-[0.76] opacity-60 z-10 cursor-pointer brightness-[0.52] hover:brightness-[0.66]';
            }

            return (
              <div
                key={slide.id}
                onClick={() => !isActive && setCurrentIndex(index)}
                style={{
                  height: isActive
                    ? 'clamp(280px, 39.8vw, 995px)'
                    : Math.abs(offset) === 1
                    ? 'clamp(250px, 37.4vw, 934px)'
                    : 'clamp(230px, 37vw, 924px)',
                }}
                className={`absolute top-0 bottom-0 my-auto w-[84vw] sm:w-[82vw] rounded-[20px] sm:rounded-[24px] md:rounded-[20px] overflow-hidden transition-all duration-500 ease-out select-none ${transformStyle}`}
              >
                {/* ── Image Element (active) ── */}
                <img
                  src={slide.imageUrl}
                  alt={`Hero slide ${slide.id}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {/* ── Video Element (preserved for future use) ──
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.videoUrl}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                />
                ── End Video Element ── */}

                {/* Vignette overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                    isActive
                      ? 'bg-gradient-to-t from-black/50 via-black/10 to-transparent'
                      : 'bg-black/20'
                  }`}
                />

                {/* Active card overlays */}
                {isActive && (
                  <>
                    {/* Prev arrow — visible on mobile + desktop */}
                    <button
                      onClick={handlePrev}
                      className="flex absolute left-4 sm:left-10 lg:left-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/60 bg-black/40 backdrop-blur-md items-center justify-center text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all z-40 focus:outline-none cursor-pointer shadow-xl"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
                    </button>

                    {/* Next arrow — visible on mobile + desktop */}
                    <button
                      onClick={handleNext}
                      className="flex absolute right-4 sm:right-10 lg:right-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/60 bg-black/40 backdrop-blur-md items-center justify-center text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all z-40 focus:outline-none cursor-pointer shadow-xl"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Dot indicators — visible on mobile, hidden on sm+ */}
        <div className="flex sm:hidden items-center justify-center gap-2.5 mt-4">
          {[0, 1, 2].map((i) => {
            const isActiveDot = i === currentIndex % 3;
            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-400 ${
                  isActiveDot
                    ? 'w-7 h-[10px] bg-[#333]'
                    : 'w-[10px] h-[10px] bg-[#ccc]'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* ── Showreel Modal ── */}
      {isShowreelOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsShowreelOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsShowreelOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer focus:outline-none"
              aria-label="Close Showreel"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              src={heroVideo}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}