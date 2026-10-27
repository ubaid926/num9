import { ArrowRight } from 'lucide-react';

const ROW1 = ['Brand', 'Digital', 'Web & App', 'UI/UX', 'E-Commerce', 'Content', 'Multichannel'];
const ROW2 = ['Design', 'Activation', 'Solutions', 'Marketing', 'Development', 'Strategy', 'Branding', 'Omnichannel'];

const row1Items = [...ROW1, ...ROW1, ...ROW1];
const row2Items = [...ROW2, ...ROW2, ...ROW2];

export default function MarqueeSection() {
  return (
    <section className="w-full bg-white pt-4 pb-20 sm:pt-6 sm:pb-28 lg:pt-8 lg:pb-32 overflow-hidden">

      {/* Heading & Subtitle */}
      <div className="max-w-[1400px] mx-auto text-center px-5 sm:px-6 mb-6 sm:mb-12">
        <h3 className="font-grift-bold font-bold text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-[#141414] tracking-[-0.03em] leading-[1.2] xl:whitespace-nowrap">
          Yes, we cover everything you need to build, market &amp; grow your brand
          <span className="text-[#F25C22]">.</span>
        </h3>
        <p className="font-grift-medium text-[16px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[30px] text-[#4B5563] leading-[1.45] mt-7 sm:mt-8 md:mt-9 lg:mt-10 max-w-[1050px] mx-auto">
          From strategy and creative to technology and activation
          <br className="hidden sm:inline" />
          {' '}we bring all the pieces together to deliver real results.
        </p>
      </div>

      {/* Row 1 — right to left (100% seamless infinite loop) */}
      <div
        className="marquee-track w-full overflow-hidden select-none mb-0.5 sm:mb-1 py-1 sm:py-1.5"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee-rtl will-change-transform">
          <div className="flex shrink-0 items-center">
            {row1Items.map((item, i) => (
              <span
                key={`row1-a-${i}`}
                className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {row1Items.map((item, i) => (
              <span
                key={`row1-b-${i}`}
                className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — left to right (100% seamless infinite loop) */}
      <div
        className="marquee-track w-full overflow-hidden select-none py-1 sm:py-1.5"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee-ltr will-change-transform">
          <div className="flex shrink-0 items-center">
            {row2Items.map((item, i) => (
              <span
                key={`row2-a-${i}`}
                className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {row2Items.map((item, i) => (
              <span
                key={`row2-b-${i}`}
                className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}