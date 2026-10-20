import React from "react";
import { Check } from "lucide-react";
import contactBg from "../assets/Contact Container.jpg";
const benefits = [
  {
    title: "The right people",
    text: "We handpick skilled, passionate, and AI-savvy talent who bring the right experience and mindset to your project.",
  },
  {
    title: "The right team",
    text: "From specialists to full-scale teams, we assemble the perfect blend of expertise to match your goals.",
  },
  {
    title: "The right place",
    text: "Global delivery with a local touch. We work seamlessly across time zones with clear, proactive communication.",
  },
  {
    title: "The right time",
    text: "Move fast and stay agile. We start when you need us and scale up or down as your needs evolve.",
  },
];

const fieldClass = `
  w-full h-[48px] rounded-full border border-black/20 bg-white px-4
  outline-none focus:border-[#2F7D25] text-[16px] sm:text-[13px] sm:h-[42px]
`;

const WhyWorkWithUs = () => {
  return (
    <section className="w-full bg-white overflow-x-hidden">
      {/* Benefits — centered, matching reference desktop composition */}
      {/* <div className="mx-auto w-full max-w-[1920px] px-5 sm:px-8 lg:px-10 pt-16 sm:pt-24 lg:pt-[145px] pb-16 sm:pb-20 lg:pb-[126px]">
        <h2 className="mx-auto text-center text-[29px] sm:text-[34px] lg:text-[38px] xl:text-[40px] font-semibold leading-[1.55] sm:leading-[1.48] tracking-[-0.035em] text-black">
          No need to wonder.
          <br />
          Working with us is wonderful<span className="text-[#F15B36]">.</span>
        </h2>

        <div className="mx-auto mt-12 sm:mt-16 lg:mt-[70px] w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-[54px] gap-y-10 sm:gap-y-12 lg:gap-y-[51px]">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-[15px] text-left min-w-0"
            >
              <div className="mt-[5px] shrink-0 w-[35px] h-[34px] rounded-[6px] bg-[#20C900] flex items-center justify-center">
                <Check
                  className="w-[21px] h-[21px] text-white"
                  strokeWidth={3.6}
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[23px] sm:text-[27px] lg:text-[30px] font-semibold leading-[1.28] tracking-[-0.025em] text-black">
                  {item.title}
                </h3>
                <p className="mt-[18px] text-[15px] sm:text-[16px] leading-[1.65] text-black max-w-[440px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Contact section — kept as supplied (pt added to maintain proper breathing room from black section above when benefits is commented) */}
      <div className="mx-auto w-full max-w-[1180px] min-[1300px]:max-w-[1520px] px-4 sm:px-8 lg:px-10 pt-14 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-28">


        <div
          className="
    relative
    overflow-hidden
    rounded-[20px]
    sm:rounded-[26px]

    bg-[#D7F0C9]
    bg-none
    xl:bg-[image:var(--contact-bg)]
    xl:bg-cover
    xl:bg-center
    xl:bg-no-repeat

    grid
    grid-cols-1
    xl:grid-cols-[0.95fr_1.05fr]
    min-[1300px]:grid-cols-[1.2fr_1fr]

    min-h-0
    xl:min-h-[420px]

    p-5
    sm:p-8
    lg:p-10
  "
          style={{
            '--contact-bg': `url("${contactBg}")`,
          }}
        >




          <div className="relative z-10 flex flex-col justify-between items-center text-center xl:items-stretch xl:text-left pr-0 xl:pr-10">
            <div>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[64px] leading-[1.08] sm:leading-[1.02] tracking-[-0.04em] font-medium text-[#242424] min-[1300px]:max-w-[720px]">
                We’re here to help,
                <br />
                contact us anytime!
              </h2>
              <p className="mt-4 sm:mt-5 max-w-[500px] min-[1300px]:max-w-[640px] mx-auto xl:mx-0 text-[16px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-black/45">
                Feel free to reach out to us anytime! Whether you have
                questions, need assistance, or simply want more information
                about our products, our team is always here to help. We’re just
                a call or message away!
              </p>
            </div>
            <div className="mt-8 xl:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-[390px] mx-auto xl:mx-0">
              <div className="min-w-0">
                <p className="text-[16px] sm:text-[16px] text-black/40">
                  Email
                </p>
                <a
                  href="mailto:support@canlife.com"
                  className="block mt-1 text-[17px] sm:text-[16px] lg:text-[20px] text-black break-all sm:break-normal"
                >
                  support@canlife.com
                </a>
              </div>
              <div className="min-w-0">
                <p className="text-[16px] sm:text-[16px] text-black/40">
                  Phone
                </p>
                <a
                  href="tel:+6287798335643"
                  className="block mt-1 text-[17px] sm:text-[16px] lg:text-[20px] text-black"
                >
                  +62 877 9833 5643
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 xl:mt-0 bg-[#F8FDEB] rounded-[20px] sm:rounded-[26px] p-4 sm:p-6 lg:p-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              <div>
                <label
                  htmlFor="wwu-first"
                  className="block text-[16px] sm:text-[14px] text-black mb-1.5"
                >
                  First name *
                </label>
                <input id="wwu-first" type="text" className={fieldClass} />
              </div>
              <div>
                <label
                  htmlFor="wwu-last"
                  className="block text-[16px] sm:text-[14px] text-black mb-1.5"
                >
                  Last name *
                </label>
                <input id="wwu-last" type="text" className={fieldClass} />
              </div>
              <div>
                <label
                  htmlFor="wwu-phone"
                  className="block text-[16px] sm:text-[14px] text-black mb-1.5"
                >
                  Phone number *
                </label>
                <input id="wwu-phone" type="tel" className={fieldClass} />
              </div>
              <div>
                <label
                  htmlFor="wwu-topic"
                  className="block text-[16px] sm:text-[14px] text-black mb-1.5"
                >
                  Select topic *
                </label>
                <select id="wwu-topic" className={fieldClass}>
                  <option value=""></option>
                  <option>General Enquiry</option>
                  <option>Project Discussion</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="wwu-message"
                  className="block text-[16px] sm:text-[14px] text-black mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="wwu-message"
                  rows={4}
                  className="w-full min-h-[100px] rounded-[18px] border border-black/20 bg-white px-4 py-3 outline-none resize-none focus:border-[#2F7D25] text-[16px] sm:text-[13px]"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="min-w-[88px] h-[42px] sm:h-[38px] rounded-full bg-[#2E7D27] text-white text-[17px] sm:text-[15px] px-6 transition-all duration-300 hover:bg-[#24671F] active:scale-95"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
