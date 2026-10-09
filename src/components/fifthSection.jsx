import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import personPhoto from '../assets/fifthSection.png';
import emiratesLogo from '../assets/Group 132.png';
import microsoftLogo from '../assets/microsoftLogo.png';
import lexusLogo from '../assets/Logo (2).png';
import jcpenneyLogo from '../assets/jcpenneyLogo.png';
import safewayLogo from '../assets/safewayLogo.png';
import pepsicoLogo from '../assets/pepsicoLogo.png';
import citibankLogo from '../assets/citibankLogo.png';
import nutrienLogo from '../assets/nutrienLogo.png';
import brandActivationIcon from '../assets/speaker 1 (7).png';
import digitalStrategyIcon from '../assets/speaker 1 (6).png';
import uiUxDesignIcon from '../assets/speaker 1 (4).png';
import websiteAppsIcon from '../assets/speaker 1 (3).png';
import digitalMarketingIcon from '../assets/speaker 1 (5).png';
import retailMarketingIcon from '../assets/speaker 1 (2).png';

// Layer logo assets (W:110 H:49 as per Figma)
import layer4 from '../assets/Layer 4 2.png';
import layer6 from '../assets/Layer 6 2.png';
import layer7 from '../assets/Layer 7 2.png';
import layer11 from '../assets/Layer 11 2.png';
import layer12 from '../assets/Layer 12 2.png';

// Exactly 7 cards — no repeat
const impactCards = [
  {
    title: 'Brand Activation',
    desc: 'Turn attention into action',
    icon: brandActivationIcon,
    border: '#7BCB24',
  },
  {
    title: 'Digital Strategy',
    desc: 'Invest where it matters',
    icon: digitalStrategyIcon,
    border: '#1C9CD8',
  },
  {
    title: 'UI/UX Design',
    desc: 'Reduce friction, lift conversions',
    icon: uiUxDesignIcon,
    border: '#1C9CD8',
  },
  {
    title: 'Website & Web Apps',
    desc: 'Move visitors toward enquiry',
    icon: websiteAppsIcon,
    border: '#7BCB24',
  },
  {
    title: 'Digital Marketing',
    desc: 'Reach qualified customers',
    icon: digitalMarketingIcon,
    border: '#7BCB24',
  },
  {
    title: 'Retail Marketing',
    desc: 'Influence purchase decisions',
    icon: retailMarketingIcon,
    border: '#1C9CD8',
  },
];

const impactStats = [
  {
    title: (
      <>
        MORE
        <br />
        CONVERSIONS
      </>
    ),
    desc: (
      <>
        Better UI/UX and faster
        <br />
        web experiences
      </>
    ),
  },
  {
    title: (
      <>
        STRONGER
        <br />
        ENGAGEMENT
      </>
    ),
    desc: (
      <>
        Connected digital and
        <br />
        Retail Campaigns
      </>
    ),
  },
];


const testimonials = [
  {
    logo: layer4,
    logoAlt: 'PepsiCo',
    text: 'Number9 consistently delivered impactful activations that strengthened consumer engagement and elevated our brand presence across multiple markets.',
  },
  {
    logo: layer7,
    logoAlt: 'Lexus',
    text: 'From concept to execution, the team brought creativity, precision, and measurable results that exceeded expectations.',
  },
  {
    logo: layer6,
    logoAlt: 'Citibank',
    text: 'Their ability to combine strategy, technology, and customer experience helped us deliver meaningful outcomes at scale.',
  },
  {
    logo: layer11,
    logoAlt: 'Safeway',
    text: 'Number9 became an extension of our team, providing reliable execution and innovative solutions across retail initiatives.',
  },
  {
    logo: layer12,
    logoAlt: 'Emirates',
    text: 'Professional, responsive, and highly collaborative. Their campaigns consistently delivered strong brand impact and customer engagement.',
  },
  {
    logo: layer4,
    logoAlt: 'Microsoft',
    text: 'Their digital strategy and execution helped us accelerate enterprise adoption and expand reach across key markets globally.',
  },
  {
    logo: layer6,
    logoAlt: 'Nutrien',
    text: 'Number9 delivered a comprehensive brand activation strategy that resonated deeply with our agricultural and retail audiences.',
  },
];

// Card dimensions set by user
const CARD_W = 341;
const CARD_H = 449;
const CARD_GAP = 20;
const CARD_VISUAL_GAP = 55;

// 2500px+ only — keep every smaller breakpoint identical
const ULTRA_MIN = 2500;
const ULTRA_CARD_W = 456;
const ULTRA_CARD_H = 601;
const ULTRA_GAP = 55;
const ULTRA_PAD = '36px 36px 32px 36px';
const ULTRA_LOGO_W = 147;
const ULTRA_LOGO_H = 65;

function CircularText({ text, radius, fontSize, color }) {
  const chars = text.split('');
  const angleStep = 360 / chars.length;
  return (
    <div className="relative w-full h-full animate-spin-slow">
      {chars.map((char, i) => {
        const angle = i * angleStep;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.sin(rad);
        const y = 50 - radius * Math.cos(rad);
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              fontSize: fontSize || 'clamp(13px, 2.2vw, 17.95px)',
              color,
              fontWeight: 500,
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

const clientGrid = [
  { logo: microsoftLogo, logoAlt: 'Microsoft', logoClass: 'h-6', title: 'Global Technology Leader', desc: 'Cloud, AI & Enterprise Solutions' },
  { logo: emiratesLogo, logoAlt: 'Emirates', logoClass: 'h-9', title: 'World-Class Airline Brand', desc: 'Premium Travel & Customer Experience' },
  { logo: lexusLogo, logoAlt: 'Lexus', logoClass: 'h-5', title: 'Luxury Automotive Excellence', desc: 'Premium Customer Experience & Innovation' },
  { logo: jcpenneyLogo, logoAlt: 'JCPenney', logoClass: 'h-6', title: 'Leading Retail Brand', desc: 'Omnichannel Commerce & Customer Engagement' },
  { logo: safewayLogo, logoAlt: 'Safeway', logoClass: 'h-6', title: 'Trusted Grocery Retailer', desc: 'Retail Marketing & Consumer Activation' },
  { logo: pepsicoLogo, logoAlt: 'PepsiCo', logoClass: 'h-6', title: 'Global Consumer Goods Leader', desc: 'Brand Activation & Shopper Marketing' },
];

// How many cards fit in viewport at once (approx)
// We show cards starting from offset 0; last valid offset = total - visibleAtOnce
// Use window width to calc, but for SSR-safety default to 3 visible
function getVisibleCount(cardW, gap) {
  if (typeof window === 'undefined') return 3;
  return Math.max(1, Math.floor(window.innerWidth / (cardW + gap)));
}

function useIsUltraWide() {
  const [isUltra, setIsUltra] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= ULTRA_MIN
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${ULTRA_MIN}px)`);
    const onChange = (event) => setIsUltra(event.matches);
    setIsUltra(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isUltra;
}

export default function FifthSection() {
  const [offset, setOffset] = useState(0);
  const isUltra = useIsUltraWide();

  // Touch swipe tracking
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const cardW = isUltra ? ULTRA_CARD_W : CARD_W;
  const cardH = isUltra ? ULTRA_CARD_H : CARD_H;
  const strideGap = isUltra ? ULTRA_GAP : CARD_GAP;
  const rowGap = isUltra ? ULTRA_GAP : CARD_VISUAL_GAP;

  // Use the actual rendered gap
  const visibleCount = getVisibleCount(cardW, rowGap);
  const maxOffset = Math.max(0, testimonials.length - visibleCount);

  const canPrev = offset > 0;
  const canNext = offset < maxOffset;

  const prev = () => { if (canPrev) setOffset((p) => p - 1); };
  const next = () => { if (canNext) setOffset((p) => p + 1); };

  useEffect(() => {
    if (offset > maxOffset) setOffset(maxOffset);
  }, [offset, maxOffset]);
  const desktopTrackWidth =
    visibleCount * cardW +
    Math.max(0, visibleCount - 1) * rowGap;
  return (
    <section className="w-full bg-white font-outfit overflow-hidden">

      {/* ══ TOP AREA ══ */}
      <div className="relative w-full">

        <div className="flex flex-col lg:flex-row">

          {/* LEFT — Photo: user-set w-[627px] h-[1271px], border-radius */}
          <div className="hidden lg:block shrink-0 w-full lg:w-[627px]">
            <img
              src={personPhoto}
              alt="Team"
              className="w-full lg:w-[627px] object-cover object-top rounded-2xl"
              style={{ height: '1271px' }}
            />
          </div>

          {/* RIGHT — Heading + desc + button */}
          <div className="flex-1  flex flex-col justify-start pt-10 sm:pt-14 px-6 sm:px-10 lg:pl-12 xl:pl-16 pb-6">
            <h2 className="text-[26px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold  leading-[1.3] max-w-[900px]">
              We've helped brands connect, engage, and grow.{' '}
              Trusted by industry leaders across North America.
            </h2>
            <p className="text-slate-500 text-[18px] sm:text-[20px] leading-relaxed mt-5 max-w-[800px]">
              20+ years of experience delivering brand activation, digital strategy, creative campaigns,
              and technology solutions for leading organizations.
            </p>
            <button className="group flex items-center gap-2 font-medium text-[14px] sm:text-[20px] text-slate-900 border-b border-slate-400 pb-1 w-fit hover:text-[#11C911] hover:border-[#11C911] transition-colors duration-300 mt-6">
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ══ CARDS ROW — absolute, overlaps photo bottom ══ */}
        <div className="w-full   py-2 lg:absolute  lg:bottom-50 lg:left-0">

        <div className="w-full lg:flex lg:justify-center">
  <div
    className="flex transition-transform duration-500 ease-in-out px-4 lg:px-0"
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
    style={{
      gap: `${rowGap}px`,
      transform: `translateX(calc(-${offset * (cardW + rowGap)}px))`,
      width:
        typeof window !== 'undefined' && window.innerWidth >= 1024
          ? `${desktopTrackWidth}px`
          : 'max-content',
    }}
  >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 bg-white border border-slate-100 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-z-2 shadow-md hover:shadow-xl"
                  style={{
                    width: `${cardW}px`,
                    height: `${cardH}px`,
                    padding: isUltra
                      ? ULTRA_PAD
                      : '28px 28px 24px 28px',
                  }}
                >
                  <div>
                    <img
                      src={t.logo}
                      alt={t.logoAlt}
                      style={{
                        width: isUltra ? `${ULTRA_LOGO_W}px` : '110px',
                        height: isUltra ? `${ULTRA_LOGO_H}px` : '49px',
                        objectFit: 'contain',
                        objectPosition: 'left center',
                      }}
                      className="mb-5"
                    />

                    <p
                      className={`leading-[1.5] ${isUltra ? 'text-[26px]' : 'text-[20px]'
                        }`}
                    >
                      {t.text}
                    </p>
                  </div>

                  <button
                    className={` sm:block text-left hover:underline w-fit mt-4 ${isUltra ? 'text-[26px]' : 'text-[20px]'
                      }`}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows — centered, both green, desktop only */}
          <div className="hidden sm:flex items-center justify-center gap-4 mt-5 pb-5">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`w-[44px] h-[44px] rounded-full border flex items-center justify-center transition-colors
                ${canPrev
                  ? 'border-[#11C911] text-[#11C911] hover:bg-[#11C911] hover:text-white cursor-pointer'
                  : 'border-[#11C911]/30 text-[#11C911]/30 cursor-not-allowed'
                }`}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={`w-[44px] h-[44px] rounded-full border flex items-center justify-center transition-colors
                ${canNext
                  ? 'border-[#11C911] text-[#11C911] hover:bg-[#11C911] hover:text-white cursor-pointer'
                  : 'border-[#11C911]/30 text-[#11C911]/30 cursor-not-allowed'
                }`}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* ══ BLACK BOX ══ */}
      <div className="relative z-10 mx-auto w-full max-w-[1494px] min-[2500px]:max-w-[1966px] px-0 sm:px-6 lg:px-8 mt-8 sm:mt-10 lg:-mt-[80px]">
        <div className="relative overflow-hidden bg-black rounded-none sm:rounded-[24px] px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-[82px] xl:py-[70px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.08fr)_minmax(220px,0.62fr)_minmax(0,1.35fr)] gap-8 sm:gap-10 lg:gap-10 xl:gap-12 min-h-0 xl:min-h-[790px]">

            {/* LEFT — BUSINESS IMPACT */}
            <div className="flex flex-col justify-between min-w-0 lg:pr-4 xl:pr-10">
              <div>
                <p className="text-white/70 uppercase text-[11px] sm:text-[12px] tracking-[0.28em] mb-5 sm:mb-8 lg:mb-10">
                  Business Impact
                </p>

                <h2 className="text-white font-semibold text-[40px] sm:text-[clamp(40px,7vw,64px)] xl:text-[64px] leading-[1.08] sm:leading-[1.02] tracking-[-0.04em] max-w-[280px] sm:max-w-none">
                  <span className="text-[#8DEB28]">Designed to</span>
                  <br />
                  perform.
                  <br />
                  Built to deliver
                  <br />
                  results.
                </h2>

                <p className="mt-5 sm:mt-8 lg:mt-14 max-w-[400px] text-white/70 text-[18px] sm:text-[17px] md:text-[19px] xl:text-[23px] leading-[1.55]">
                  Strategy, design, development, and
                  marketing working together to improve
                  every step of the customer journey.
                </p>
              </div>

              <a
                href="#"
                className="group mt-8 lg:mt-10 xl:mt-0 flex items-center justify-between w-full max-w-[260px] pb-3 border-b border-[#22B8F3] text-white text-[16px] sm:text-[18px] xl:text-[22px]"
              >
                <span>Let’s Talk Results</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#22B8F3] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* CENTER — KPI CIRCLES */}
            <div className="flex flex-row lg:flex-col flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-16 xl:gap-24 lg:px-1">
              {impactStats.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center shrink-0 w-[min(42vw,160px)] h-[min(42vw,160px)] sm:w-[190px] sm:h-[190px] md:w-[210px] md:h-[210px] xl:w-[265.54px] xl:h-[265.54px]"
                >
                  <div className="absolute inset-0 opacity-[0.52]">
                    <CircularText
                      text="Successfully executed projects · "
                      radius={52}
                      color="#FFFFFF"
                    />
                  </div>

                  <div className="relative z-10 text-center px-2 max-w-[78%] sm:max-w-[180px]">
                    <h3 className="text-white text-[18px] sm:text-[20px] md:text-[22px] xl:text-[29px] font-semibold leading-[1.08] tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-4 xl:mt-5 text-white/90 text-[13px] sm:text-[13px] xl:text-[15px] leading-[1.4]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — SERVICES */}
            <div className="relative flex items-center min-w-0 pt-6 sm:pt-8 border-t border-white/20 lg:col-span-2 xl:col-span-1 xl:border-t-0 xl:pt-0 xl:border-l xl:border-white/20 xl:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 xl:gap-x-14 xl:gap-y-16 w-full">
                {impactCards.map((card, index) => {
                  const mobileBorder = index % 2 === 0 ? '#7BCB24' : '#1C9CD8';
                  return (
                  <div
                    key={index}
                    className="min-h-0 sm:min-h-[170px] xl:min-h-[206px] rounded-[18px] sm:rounded-[24px] px-4 py-4 sm:px-5 sm:py-6 xl:px-5 xl:py-7 flex flex-col justify-center transition-transform duration-300 hover:-translate-y-1 impact-card"
                    style={{
                      border: `1px solid ${mobileBorder}`,
                      '--desktop-border': card.border,
                    }}
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className="w-8 h-8 sm:w-[47px] sm:h-[47px] mb-3 sm:mb-5 object-contain brightness-0 invert"
                    />
                    <h3 className="text-white font-semibold text-[15px] sm:text-[19px] xl:text-[22px] leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-white/65 text-[13px] sm:text-[15px] xl:text-[18px] leading-[1.3] sm:leading-[1.15] max-w-none xl:max-w-[180px]">
                      {card.desc}
                    </p>
                  </div>
                  );
                })}              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Restore desktop border colors for impact cards at sm+ */}
      <style>{`
        @media (min-width: 640px) {
          .impact-card {
            border-color: var(--desktop-border) !important;
          }
        }
      `}</style>

    </section>
  );
}
