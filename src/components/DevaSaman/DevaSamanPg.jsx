// src/pages/DevaSamanPage.jsx

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ======================
   VIDEO DATA
====================== */

const devasamanVideos = [
  {
    url: "https://www.youtube.com/embed/CxKSDaKFTJ0",
    title: "DevaSaman – Live Presentation",
  },
  {
    url: "https://www.youtube.com/embed/eCqY84vZWwg",
    title: "DevaSaman – Festival Excerpt",
  },
  {
    url: "https://www.youtube.com/embed/DTzLBeo676Q",
    title: "DevaSaman – Special Concert",
  },
];

/* ======================
   CAROUSEL
====================== */

const DevaSamanCarousel = ({ playlistLink }) => {
  const swiperRef = useRef(null);

  return (
    <div className="md:pt-14">
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
        {devasamanVideos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1c1c1c] border border-[#1f1f1f]/10 rounded-xl shadow-md px-1 pt-1 flex flex-col">
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

      {/* Controls */}
      <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-2 border border-[#1f1f1f]/60 text-[#1f1f1f] 
               rounded-full hover:bg-[#1f1f1f] hover:text-white transition"
        >
          ←
        </button>

        <a
          href={playlistLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-[#1f1f1f] text-[#1f1f1f]
               rounded-full text-sm tracking-wider
               hover:bg-[#1f1f1f] hover:text-white transition"
        >
          View Playlist
        </a>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-2 border border-[#1f1f1f]/60 text-[#1f1f1f]
               rounded-full hover:bg-[#1f1f1f] hover:text-white transition"
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

const DevaSamanPg = () => {
  return (
    <>
      {/* ===== Top Section (Light Theme) ===== */}
      <section className="bg-[#f4f3f1] text-[#1f1f1f] pt-20 pb-10 px-8 md:px-20">
        <h1 className="text-3xl md:text-5xl font-serif pb-4 font-semibold md:pt-10 md:pb-6 md:mx-8">
              DevaSaman
            </h1>
        <div className=" mx-auto grid md:grid-cols-2 gap-8  md:gap-20 items-center md:px-8">
          {/* Left Content */}
          <div className="space-y-2">
            
            <p className="text-[#1f1f1f] leading-relaxed text-justify md:text-lg">
              Debapriya and Samanwaya are artistic soulmates who perform both as distinguished soloists and as a rare and compelling duo. For over two decades, they have remained one of the country’s only consistently active classical duos, creating a unique musical identity rooted in tradition yet enriched with innovation. Beyond the concert stage, their creative collaboration extends into direction and composition. They directed the acclaimed documentary Girija – A Lifetime in Music and have composed music for films, theatrical productions, and the Australian film The Last Warrior. Their artistic vision reflects a deep respect for heritage while embracing contemporary expression. Through their performances across India and abroad, they have shared the beauty and depth of Indian Classical Music with global audiences, attracting enthusiasts, connoisseurs, and listeners across generations. Together as DevaSaman, they embody versatility and synergy, presenting a dynamic spectrum of musical expression. Each performance is thoughtfully crafted — rich in emotion, depth, and technical brilliance — ensuring an immersive and unforgettable musical experience.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/assets/DS.jpg"
              alt="DevaSaman"
              className="w-full h-[350px] md:h-[480px] object-cover rounded-xl grayscale"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f3f1] pb-10 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <DevaSamanCarousel playlistLink="https://youtube.com/playlist?list=DEVASAMAN_PLAYLIST_ID" />
        </div>
      </section>
    </>
  );
};

export default DevaSamanPg;
