import { ArrowRight } from 'lucide-react';

const ROW1 = ['Brand', 'Digital', 'Web & App', 'UI/UX', 'E-Commerce', 'Content', 'Multichannel'];
const ROW2 = ['Design', 'Activation', 'Solutions', 'Marketing', 'Development', 'Strategy', 'Branding'];

const repeat = (arr, times = 4) => Array(times).fill(arr).flat();

export default function MarqueeSection() {
  return (
    <section className="w-full bg-white pt-10 pb-14 overflow-hidden">

      {/* Heading */}
      <div className="text-center px-6 mb-8 sm:mb-10">
        <h3 className="text-[18px] sm:text-[22px] md:text-[40px] font-bold  mb-3 leading-snug">
          Yes, we cover everything you need to build, market &amp; grow your brand
          <span className="text-[#F25C22]">.</span>
        </h3>
        <p className=" text-[13px] sm:text-[30px]  mx-auto leading-relaxed">
          From strategy and creative to technology and activation
          <br className="hidden sm:block" />
          {' '}we bring all the pieces together to deliver real results.
        </p>
      </div>

      {/* Row 1 — right to left */}
      <div
        className="marquee-track w-full overflow-hidden mb-1 sm:mb-2"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div className="animate-marquee-rtl flex whitespace-nowrap will-change-transform">
          {repeat(ROW1).map((item, i) => (
            <span
              key={i}
              className="inline-block px-5 sm:px-8 md:px-10 text-[26px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — left to right */}
      <div
        className="marquee-track w-full overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div className="animate-marquee-ltr flex whitespace-nowrap will-change-transform">
          {repeat(ROW2).map((item, i) => (
            <span
              key={i}
              className="inline-block px-5 sm:px-8 md:px-10 text-[26px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Explore All Services */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button className="group flex items-center gap-2 sm:gap-3 font-medium text-[14px] sm:text-[17px] md:text-[22px]    border-b border-slate-400 pb-1 hover:text-[#11C911] hover:border-[#11C911] transition-colors duration-300">
          Explore All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
}