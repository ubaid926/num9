
import React from "react";
import business from "../assets/bussinesAcltImage.webp";

const AccelerateBusinessSection = ({ onScheduleClick }) => {
  return (
    <section className="w-full relative overflow-hidden bg-black">
      {/* Mobile background: top white area cutting across the exact midpoint of the image */}
      <div className="absolute inset-x-0 top-0 h-[113px] sm:h-[136px] md:h-[156px] bg-white lg:hidden pointer-events-none" />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]

          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14
          2xl:px-16

          pt-6 pb-12
          sm:pt-8 sm:pb-14
          md:pt-10 md:pb-16
          lg:py-16
          xl:py-20

          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-8
          md:gap-12
          lg:gap-16
          xl:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            relative
            z-20

            w-full
            lg:w-[48%]
            xl:w-[46%]

            flex
            flex-col

            items-center
            text-center

            lg:items-start
            lg:text-left

            justify-center

            order-2
            lg:order-1
          "
        >
          <h2
            className="
              text-white

              text-[28px]
              sm:text-[34px]
              md:text-[36px]
              lg:text-[40px]

              leading-[1.28]
              tracking-[-0.03em]
              font-normal
            "
          >
            Ready to accelerate
            <br />
            your business?
            <br />

            <span className="text-[#25D000]">
              Let’s make it happen.
            </span>
          </h2>

          <button
            type="button"
            onClick={onScheduleClick}
            className="
              mt-7
              sm:mt-8
              md:mt-9

              h-[40px]
              sm:h-[42px]
              md:h-[44px]

              px-5
              sm:px-6

              rounded-[5px]

              bg-[#46AEEA]
              text-white

              text-[13px]
              sm:text-[14px]
              lg:text-[15px]

              font-medium

              transition-all
              duration-300

              hover:bg-[#2D9FE1]
              active:scale-95
            "
          >
            Schedule a Call
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            z-10

            w-full
            lg:w-[44%]
            xl:w-[42%]

            flex
            items-center
            justify-center

            lg:justify-end

            order-1
            lg:order-2

            py-0
          "
        >
          {/* IMAGE WRAPPER */}
          <div
            className="
              relative

              w-[300px]
              sm:w-[350px]
              md:w-[390px]
              lg:w-[390px]

              max-w-full
              aspect-[390/232]

              group
              shrink-0
            "
          >
            {/* STRAIGHT GREEN BORDER */}
            <div
              className="
                absolute
                inset-0

                border
                border-[#25D000]

                z-0
                pointer-events-none
              "
            />

            {/* ROTATED IMAGE */}
            <div
              className="
                absolute
                inset-0
                z-10

                overflow-hidden

                origin-center
                rotate-[-6deg]

                transition-transform
                duration-500
                ease-out

                group-hover:rotate-[-3deg]
                group-hover:scale-[1.02]
              "
            >
              <img
                src={business}
                alt="Business team collaboration"
                className="
                  block
                  w-full
                  h-full
                  object-cover
                "
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccelerateBusinessSection;
