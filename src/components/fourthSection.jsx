import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blackLogo from '../assets/white_logo.png';

const slides = [
  {
    text: 'Number9 Media & Creative Inc. recognized by Ad Age on the Agency A-List 2024, honoring the most innovative agencies driving growth and impact across North America.',
  },
  {
    text: 'Number9 Media & Creative Inc. named one of the top digital transformation agencies by Campaign Magazine for excellence in brand activation and multichannel execution.',
  },
  {
    text: 'Number9 Media & Creative Inc. featured by MediaPost as a pioneer in data-driven marketing, delivering measurable results for Fortune 500 brands across North America.',
  },
  {
    text: 'Number9 Media & Creative Inc. highlighted by Marketing Dive for setting new standards in integrated digital campaigns that drive consumer engagement and brand loyalty.',
  },
  {
    text: 'Number9 Media & Creative Inc. recognized by Adweek among the most creative agencies reshaping brand experiences through technology, strategy, and storytelling.',
  },
];

const DURATION = 380;

export default function FourthSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideStyle, setSlideStyle] = useState({ opacity: 1, transform: 'translateX(0px)' });

  const navigate = (dir) => {
    if (animating) return;
    setAnimating(true);

    setSlideStyle({
      opacity: 0,
      transform: `translateX(${dir === 'next' ? '-50px' : '50px'})`,
      transition: `all ${DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
    });

    setTimeout(() => {
      setCurrent((p) =>
        dir === 'next' ? (p + 1) % slides.length : (p - 1 + slides.length) % slides.length
      );
      setSlideStyle({
        opacity: 0,
        transform: `translateX(${dir === 'next' ? '50px' : '-50px'})`,
        transition: 'none',
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideStyle({
            opacity: 1,
            transform: 'translateX(0px)',
            transition: `all ${DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
          });
          setTimeout(() => setAnimating(false), DURATION);
        });
      });
    }, DURATION);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-30 px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-[1070px] rounded-[16px] overflow-hidden shadow-lg">

        {/* ── TOP BAR ── #52606D */}
        {/* Mobile: centered stacked | Desktop: single row */}
        <div className="bg-[#52606D]">

          {/* Mobile top bar */}
          <div className="flex sm:hidden flex-col items-center py-4 px-6 gap-3">
            <span className="text-white text-[13px] ">As featured in...</span>
            <div className="flex items-center justify-center gap-6">
              <span className="text-white text-[16px] font-extrabold tracking-tight">AdAge</span>
              <span className="text-white text-[15px] font-semibold">campaign</span>
            </div>
            <div className="flex items-center justify-center gap-5">
              <span className="text-white text-[14px] font-normal">MediaPost</span>
              <span className="flex items-center gap-1.5">
                <span className="w-[18px] h-[18px] rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0">
                  <span className="text-white text-[8px] font-bold">●</span>
                </span>
                <span className="text-white text-[11px] font-medium tracking-widest uppercase">MARKETINGDIVE</span>
              </span>
            </div>
          </div>

          {/* Desktop top bar — exactly as before */}
          <div className="hidden sm:flex px-6  sm:px-10 h-[58px] sm:h-[105px] items-center gap-4 sm:gap-10">
            <span className="text-white text-[13px] sm:text-[25px] whitespace-nowrap shrink-0">As featured in...</span>
            <div className="flex items-center gap-5 sm:gap-9 flex-1 justify-end overflow-x-auto scrollbar-none">
              <span className="text-white text-[14px] sm:text-[25px] font-extrabold whitespace-nowrap tracking-tight">AdAge</span>
              <span className="text-white text-[14px] sm:text-[25px] font-semibold whitespace-nowrap">campaign</span>
              <span className="text-white text-[14px] sm:text-[25px] font-normal whitespace-nowrap">MediaPost</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0">
                  <span className="text-white text-[8px] sm:text-[10px] font-bold">●</span>
                </span>
                <span className="text-white text-[10px] sm:text-[25px] font-medium tracking-widest uppercase">MARKETINGDIVE</span>
              </span>
              <span className="text-white text-[14px] sm:text-[25px] font-black whitespace-nowrap tracking-widest">ADWEEK</span>
            </div>
          </div>
        </div>

        {/* ── MIDDLE ── #3D4751 */}
        {/* Mobile: logo centered top, text below | Desktop: logo left + divider + text right */}
        <div className="bg-[#3D4751]">

          {/* Mobile middle */}
          <div className="flex sm:hidden flex-col items-center px-6 pt-8 pb-8 gap-6">
            <img
              src={blackLogo}
              alt="Number9"
              className="object-contain"
              style={{ width: '150px', height: 'auto' }}
            />
            <div className="w-full overflow-hidden">
              <div style={slideStyle}>
                <p className="text-white text-[15px] font-light leading-[1.75]">
                  {slides[current].text}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop middle — exactly as before */}
          <div
            className="hidden sm:flex px-6 sm:px-10 py-8 sm:py-10 items-center gap-0"
            style={{ minHeight: '240px' }}
          >
            <div className="shrink-0 flex items-center justify-center" style={{ width: 'clamp(110px, 18vw, 220px)' }}>
              <img
                src={blackLogo}
                alt="Number9"
                className="object-contain  "
                style={{ width: 'clamp(90px, 15vw, 185px)', height: 'auto' }}
              />
            </div>
            <div className="self-stretch w-[1px] bg-[#ffffff] mx-6 sm:mx-10 shrink-0" />
            <div className="flex-1 overflow-hidden">
              <div style={slideStyle}>
                <p className="text-white text-[14px] sm:text-[17px] md:text-[22px] font-light leading-relaxed max-w-[560px]">
                  {slides[current].text}
                </p>
                {/* <div className="mt-5 w-[160px] sm:w-[340px] h-[2px] rounded-full bg-gradient-to-r from-[#199A61] to-transparent" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="bg-[#3D4751] border-t border-[#ffffff] h-[54px] sm:h-[72px] flex items-center px-5 sm:px-10">

          {/* Prev — mobile: icon only | desktop: icon + text */}
          <button
            onClick={() => navigate('prev')}
            disabled={animating}
            className="flex items-center gap-1.5 sm:gap-2 text-white disabled:opacity-40 hover:opacity-80 transition-opacity"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline text-[22px]">Previous</span>
          </button>

          {/* Dots */}
          <div className="flex-1 flex items-center justify-center gap-[10px] sm:gap-[12px]">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (i !== current) navigate(i > current ? 'next' : 'prev'); }}
                className={`rounded-full border-2 transition-all duration-300 ${
                  i === current
                    ? 'w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] border-white bg-white'
                    : 'w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border-white/40 bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Next — mobile: icon only | desktop: text + icon */}
          <button
            onClick={() => navigate('next')}
            disabled={animating}
            className="flex items-center gap-1.5 sm:gap-2 text-white disabled:opacity-40 hover:opacity-80 transition-opacity"
          >
            <span className="hidden sm:inline text-[22px]">Next</span>
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}
