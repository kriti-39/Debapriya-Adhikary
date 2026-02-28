// src/components/Performances/Performances.jsx

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

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

const Learning = () => {
  const swiperRef = useRef(null);

  return (
    <section
      id="learning"
      className="py-10 md:py-24 bg-[#f6f6f6] text-[#1c1c1c] px-8 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center md:text-left">
          Learn with Deva
        </h2>

        <p className="mt-4 text-base md:text-lg max-w-full mx-auto md:mx-0 text-justify md:text-justify text-[#1c1c1c]">
          Learning music is a lifelong journey that requires dedication, patience, and an openness to evolve. Through his years of rigorous training and experience, Debapriya Adhikary emphasizes not just the acquisition of technical skills, but also the cultivation of sensitivity, expression, and a deep connection with the art form. His approach encourages learners to internalize music as a way of life rather than merely a discipline. Under his guidance, students are introduced to the foundational as well as advanced aspects of Hindustani classical music, including voice culture, raga development, and stylistic nuances. His teachings aim to nurture individuality while staying rooted in tradition, enabling learners to build both confidence and artistic depth over time

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
                <div className="bg-[#1c1c1c] rounded-xl shadow-lg px-1 pt-1 flex flex-col">

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
                  <h3 className="font-semibold pb-3 px-2 text-[#f6f6f6] leading-snug">
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
    className="px-4 py-2 border border-[#434343]/60 text-[#434343] 
               rounded-full hover:bg-[#434343] hover:text-white 
               transition duration-300"
  >
    ←
  </button>

  <Link
    to="/learning"
    className="inline-block px-6 py-2 border border-[#1c1c1c]/60 
               text-[#1c1c1c] rounded-full 
               hover:bg-[#1c1c1c] hover:text-white 
               transition duration-300 text-center"
  >
    Explore More
  </Link>

  <button
    onClick={() => swiperRef.current?.slideNext()}
    className="px-4 py-2 border border-[#1c1c1c]/60 text-[#1c1c1c] 
               rounded-full hover:bg-[#1c1c1c] hover:text-white 
               transition duration-300"
  >
    →
  </button>
</div>

      </div>
    </section>
  );
};

export default Learning;