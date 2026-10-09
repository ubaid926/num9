import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import heroVideo from '../assets/videos/JamSpread15Sec.webm';

export default function HeroSection({ isDarkened }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  // 5 slides using the provided video for the full multi-card depth
  const slides = [
    { id: 1, videoUrl: heroVideo },
    { id: 2, videoUrl: heroVideo },
    { id: 3, videoUrl: heroVideo },
    { id: 4, videoUrl: heroVideo },
    { id: 5, videoUrl: heroVideo },
  ];

  // Only play the video of whichever card is currently in front
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Auto-play was prevented (browser policy), muted autoplay usually succeeds
            });
          }
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

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
        className={`relative w-full overflow-hidden bg-white -mt-2 sm:-mt-4 md:-mt-20 pt-0 pb-6 sm:pb-5  flex flex-col items-center justify-center transition-all duration-300 ${
          isDarkened ? 'brightness-50 pointer-events-none blur-[1px]' : ''
        }`}
      >
        {/* Carousel Container: Full width on larger screens without being boxed into a fixed centered max-width */}
        <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[clamp(370px,51vw,1600px)] flex items-center justify-center overflow-hidden px-0 sm:px-4 md:px-8">
          {slides.map((slide, index) => {
            // Calculate offset relative to current index for layering & positioning
            let offset = index - currentIndex;

            // Handle infinite loop wrapping for smooth positioning
            if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
            if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Transforms from user's specification:
            // Mobile: only active card shown full-width without controls
            // Desktop & larger screens: 3D deck maintaining the exact 82vw scale and offsets across all viewports
            let transformStyle = 'opacity-0 pointer-events-none';

            if (isActive) {
              transformStyle =
                'translate-x-0 scale-100 opacity-100 z-30 shadow-none ';
            } else if (offset === -1) {
              transformStyle =
                'hidden sm:block -translate-x-[10%] sm:-translate-x-[10.5%] scale-[0.88] opacity-100 z-20 cursor-pointer filter brightness-[0.70] hover:brightness-[0.82]';
            } else if (offset === 1) {
              transformStyle =
                'hidden sm:block translate-x-[10%] sm:translate-x-[10.5%] scale-[0.88] opacity-100 z-20 cursor-pointer filter brightness-[0.70] hover:brightness-[0.82]';
            } else if (offset === -2) {
              transformStyle =
                'hidden sm:block -translate-x-[18%] sm:-translate-x-[20%] scale-[0.76] opacity-60 z-10 cursor-pointer filter brightness-[0.52] hover:brightness-[0.66]';
            } else if (offset === 2) {
              transformStyle =
                'hidden sm:block translate-x-[18%] sm:translate-x-[20%] scale-[0.76] opacity-60 z-10 cursor-pointer filter brightness-[0.52] hover:brightness-[0.66]';
            }

            return (
              <div
                key={slide.id}
                onClick={() => !isActive && setCurrentIndex(index)}
                style={{
                  height: isActive
                    ? 'clamp(460px, 39.8vw, 995px)'
                    : Math.abs(offset) === 1
                    ? 'clamp(420px, 37.4vw, 934px)'
                    : 'clamp(400px, 37vw, 924px)',
                }}
                className={`absolute top-0 bottom-0 my-auto w-full sm:w-[82vw] rounded-none sm:rounded-[24px] md:rounded-[20px] overflow-hidden transition-all duration-500 ease-out select-none ${transformStyle}`}
              >
                {/* Video Element */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.videoUrl}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                />

                {/* Subtle vignette/contrast overlay on active card */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                    isActive
                      ? 'bg-gradient-to-t from-black/60 via-black/20 to-black/20'
                      : 'bg-black/20'
                  }`}
                />

                {/* ── Active Card Overlays (Text + Watch Showreel + Navigation Arrows) ── */}
                {isActive && (
                  <>
                    {/* Navigation Arrows on Active Card - Desktop only */}
                    <button
                      onClick={handlePrev}
                      className="hidden sm:flex absolute left-5 sm:left-10 lg:left-14 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/60 bg-black/30 backdrop-blur-md items-center justify-center text-white hover:bg-black/50 hover:scale-105 active:scale-95 transition-all z-40 focus:outline-none cursor-pointer shadow-xl"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="hidden sm:flex absolute right-5 sm:right-10 lg:right-14 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/60 bg-black/30 backdrop-blur-md items-center justify-center text-white hover:bg-black/50 hover:scale-105 active:scale-95 transition-all z-40 focus:outline-none cursor-pointer shadow-xl"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>

                    {/* Center Overlay: "Spaces that Inspire." + "Watch Showreel" */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-16 md:px-28 pointer-events-none">
                      <div className="flex flex-col md:flex-row items-center md:items-center gap-4 sm:gap-6 md:gap-10 pointer-events-auto">
                        
                        {/* Headline: Spaces that Inspire. */}
                        {/* <div className="text-center md:text-left select-none px-2">
                          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[86px] 2xl:text-[96px] font-extrabold text-white tracking-tight leading-[1.06] drop-shadow-md">
                            Spaces
                            <br />
                            that <span className="text-[#4CBD86]">Inspire.</span>
                          </h1>
                        </div> */}

                        {/* Watch Showreel Play Button - Desktop only */}
                        {/* <button
                          onClick={() => setIsShowreelOpen(true)}
                          className="hidden sm:flex items-center gap-3.5 sm:gap-4 group focus:outline-none cursor-pointer pt-3 md:pt-6"
                          aria-label="Watch Showreel"
                        >
                          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-white/80 bg-black/30 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4CBD86] group-hover:border-[#4CBD86] shadow-2xl">
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-white text-white ml-0.5 sm:ml-1" />
                          </div>
                          <div className="text-left select-none">
                            <span className="block text-[13px] sm:text-[15px] md:text-[16px] font-medium text-white/90 leading-tight">
                              Watch
                            </span>
                            <span className="block text-[14px] sm:text-[16px] md:text-[18px] font-bold text-white leading-tight">
                              Showreel
                            </span>
                          </div>
                        </button> */}

                      </div>
                    </div>
                    */

                    {/* Mute/Unmute quick toggle at top-right of active card - Desktop only */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="hidden sm:flex absolute top-5 sm:top-8 right-5 sm:right-8 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/30 backdrop-blur-md border border-white/30 text-white items-center justify-center hover:bg-black/50 transition-all z-30 focus:outline-none cursor-pointer"
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white/80" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-[#11C911]" />
                      )}
                    </button>
                  </>
                )}
              </div>
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