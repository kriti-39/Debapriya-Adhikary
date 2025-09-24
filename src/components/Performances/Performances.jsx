// src/components/Performances/Performances.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Performances = () => {
  const swiperRef = useRef(null);

  return (
    <section
      id="performances"
      className="py-16 bg-[#2a1e17] text-[#f5e6d3] px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center md:text-left">
          Performances
        </h2>
        <p className="mt-4 text-lg text-[#e5d5c2] max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          A glimpse of soulful performances across India and abroad — blending
          tradition, passion, and innovation in every note.
        </p>

        {/* Carousel */}
        <div className="mt-10">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <SwiperSlide key={item}>
                <div className="bg-[#f5e6d3] rounded-xl shadow-md p-4 flex flex-col">
                  <div className="h-40 bg-gray-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-[#2a1909]">Performance {item}</h3>
                  <p className="text-sm text-[#2a1909]">
                    Short description of the concert or event.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom controls */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-4 py-2 bg-[#f5e6d3] text-[#2a1909] rounded-lg shadow hover:bg-[#754a2d] transition"
          >
            ←
          </button>
          <a
            href="/performances"
            className="inline-block px-6 py-2 bg-[#f5e6d3] text-[#2a1909] font-medium rounded-lg shadow hover:bg-[#754a2d] transition"
          >
            View All Performances
          </a>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 bg-[#f5e6d3] text-[#2a1909] rounded-lg shadow hover:bg-[#754a2d] transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Performances;
