// src/components/Learning/Learning.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Learning = () => {
  const swiperRef = useRef(null);

  return (
    <section
      id="learning"
      className="py-16 bg-[#f5e6d3] text-gray-800 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center md:text-left">
          Learning
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          Explore guided lessons, online workshops, and insights into Hindustani
          classical music through videos and resources.
        </p>

        {/* Carousel */}
        <div className="mt-10">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, reverseDirection: true, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
                <div className="bg-[#2a1909] rounded-xl shadow-md p-6 flex flex-col">
                  <div className="h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    🎬 YouTube Video {item}
                  </div>
                  <h3 className="font-semibold">Lesson {item}</h3>
                  <p className="text-sm text-gray-600">
                    A short description of what this video covers.
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
            className="px-4 py-2 bg-[#2a1909] text-white rounded-lg shadow hover:bg-[#754a2d] transition"
          >
            ←
          </button>
          <a
            href="/learning"
            className="inline-block px-6 py-2 bg-[#2a1909] text-white font-medium rounded-lg shadow hover:bg-[#754a2d] transition"
          >
            Explore All Learning
          </a>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 bg-[#2a1909] text-white rounded-lg shadow hover:bg-[#754a2d] transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Learning;
