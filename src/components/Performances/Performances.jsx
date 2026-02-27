// src/components/Performances/Performances.jsx

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const videos = [
  {
    url: "https://www.youtube.com/embed/CxKSDaKFTJ0",
    title: "Raga Performance – Live Concert",
  },
  {
    url: "https://www.youtube.com/embed/eCqY84vZWwg",
    title: "Classical Evening Recital",
  },
  {
    url: "https://www.youtube.com/embed/DTzLBeo676Q",
    title: "International Festival Performance",
  },
  {
    url: "https://www.youtube.com/embed/sHIBUEBKgR4",
    title: "Raga Presentation – Special Event",
  },
  {
    url: "https://www.youtube.com/embed/f7HipH3YqaY",
    title: "Live Khayal Performance",
  },
  {
    url: "https://www.youtube.com/embed/ymUOecMGk6w",
    title: "Concert Excerpt",
  },
  {
    url: "https://www.youtube.com/embed/eXJqciLgiN4",
    title: "Festival Appearance",
  },
];

const Performances = () => {
  const swiperRef = useRef(null);

  return (
    <section
      id="performances"
      className="py-10 md:py-24 bg-[#1c1c1c] text-[#f6f6f6] px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center md:text-left">
          Performances
        </h2>

        <p className="mt-4 text-base md:text-lg max-w-5xl mx-auto md:mx-0 text-center md:text-left text-white/70">
          A glimpse of soulful performances across India and abroad, blending
          tradition, passion, and innovation in every note.
        </p>

        {/* Carousel */}
        <div className="mt-8">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#f6f6f6] rounded-xl shadow-lg px-1 pt-1 flex flex-col">

                  {/* Video */}
                  <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden mb-4">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Performance Title Only */}
                  <h3 className="font-semibold pb-3 px-2 text-[#434343] leading-snug">
                    {video.title}
                  </h3>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Controls */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-4 py-2 border border-white/60 text-white rounded-full hover:bg-white hover:text-black transition"
          >
            ←
          </button>

          <a
            href="/performances"
            className="inline-block px-6 py-2 border border-white/60 rounded-full hover:bg-white hover:text-black transition text-center"
          >
            All Performances
          </a>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-4 py-2 border border-white/60 text-white rounded-full hover:bg-white hover:text-black transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Performances;