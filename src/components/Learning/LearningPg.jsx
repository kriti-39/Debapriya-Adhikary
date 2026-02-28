// src/pages/LearningPage.jsx

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ======================
   VIDEO DATA
====================== */

const ragaVideos = [
  { url: "https://www.youtube.com/embed/CxKSDaKFTJ0", title: "Raga Yaman – Vilambit" },
  { url: "https://www.youtube.com/embed/eCqY84vZWwg", title: "Raga Bageshree – Drut" },
  { url: "https://www.youtube.com/embed/DTzLBeo676Q", title: "Raga Multani – Aalap" },
];

const vocalVideos = [
  { url: "https://www.youtube.com/embed/sHIBUEBKgR4", title: "Voice Culture Basics" },
  { url: "https://www.youtube.com/embed/f7HipH3YqaY", title: "Understanding Bandish" },
  { url: "https://www.youtube.com/embed/ymUOecMGk6w", title: "Improving Breath Control" },
];

/* ======================
   REUSABLE CAROUSEL
====================== */

const LearningCarousel = ({ videos, playlistLink }) => {
  const swiperRef = useRef(null);

  return (
    <div className="mt-10">

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
            <div className="bg-[#1c1c1c] rounded-xl shadow-md px-1 pt-1 flex flex-col">
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
              <h3 className="font-medium pb-4 px-2 text-white text-sm leading-snug">
                {video.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Controllers ===== */}
      <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-2 border border-[#1f1f1f]/60 text-[#1f1f1f] rounded-full hover:bg-[#1f1f1f] hover:text-white transition"
        >
          ←
        </button>

        <a
          href={playlistLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-[#1f1f1f] rounded-full text-sm tracking-wider hover:bg-[#1f1f1f] hover:text-white transition"
        >
          View Playlist
        </a>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-2 border border-[#1f1f1f]/60 text-[#1f1f1f] rounded-full hover:bg-[#1f1f1f] hover:text-white transition"
        >
          →
        </button>

      </div>

    </div>
  );
};

/* ======================
   MAIN PAGE
====================== */

const LearningPg = () => {
  return (
    <section className="bg-[#f4f3f1] text-[#1f1f1f] pt-20 pb-10 px-8 md:pt-20 md:pb-20 md:px-20">
      <div className="mx-auto space-y-8">        

        {/* ================= RAGA SHASTRA SERIES ================= */}
        <div className="space-y-6 md:pt-10 md:px-10">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold">
            Raga Shastra Series
          </h2>

          <div className="text-[#1f1f1f] leading-relaxed text-justify md:text-lg md:pb-2">
            <p>In this series, a wide range of ragas from Hindustani Shastriya Sangeet are explored in depth with Debapriya Adhikary, who takes listeners on an immersive musical journey. Following the principles of Ashtaang Gayaki, he carefully explains each aspect of raga presentation, including its structure, mood, and expression, supported by detailed demonstrations in Vilambit and/or Drut compositions. This initiative is a sincere effort to document the richness and diversity of ragas, preserving their essence for future generations. By breaking down complex concepts into accessible insights, the series serves as both an educational resource and a valuable archive for students, practitioners, and connoisseurs of Indian classical music.
</p>
          </div>

          <LearningCarousel
            videos={ragaVideos}
            playlistLink="https://youtube.com/playlist?list=RAGA_PLAYLIST_ID"
          />
        </div>

        {/* ================= ONLINE LEARNING ================= */}
        <div className="space-y-6 md:px-10"> 
          <h2 className="text-3xl md:text-5xl font-serif font-semibold">
            Learn Hindustani Classical Vocal Online
          </h2>

          <p className="text-[#1f1f1f] leading-relaxed text-justify md:text-lg md:pb-2">
            Debapriya Adhikary offers thoughtfully designed online vocal tutorials that focus on various aspects of Hindustani classical music. These include voice culture, raga understanding, and the finer elements of gayaki, presented in a clear and structured manner to benefit learners at different stages of their musical journey.
          </p>

          <LearningCarousel
            videos={vocalVideos}
            playlistLink="https://youtube.com/playlist?list=VOCAL_PLAYLIST_ID"
          />
        </div>

        {/* ================= WORKSHOPS ================= */}
        <div className="space-y-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold">
            Workshops
          </h2>

          <div className="text-[#1f1f1f] leading-relaxed text-justify md:text-lg md:pb-2">
            <p>Debapriya Adhikary conducts in-depth workshops designed to provide a comprehensive understanding of Hindustani classical vocal music. These sessions focus on strengthening the voice, improving tonal quality, and developing control through systematic practice techniques. Special emphasis is given to paltas, breath control, and building a strong foundation essential for advanced musical expression. The workshops also explore key elements of gayaki, including bandish development, tappa, and stylistic nuances across forms. Through detailed explanations, demonstrations, and interactive learning, participants gain practical insights into both the technical and aesthetic aspects of music, making these workshops enriching for students, performers, and enthusiasts alike.
</p>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBPRV94u_bA-e-SRUJldUiIOnTDB4ZTih2wGkNi-gnMpjTzg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 border border-[#1f1f1f] rounded-full text-sm tracking-wider hover:bg-[#1f1f1f] hover:text-white transition duration-300"
          >
            Register Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default LearningPg;