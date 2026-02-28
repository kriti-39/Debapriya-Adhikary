// src/components/About/About.jsx

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 md:py-24 bg-[#f6f6f6] text-[#2b2a2a]"
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 px-8 md:px-10 lg:px-20">

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/IMG-20250810-WA0011.jpg"
            alt="Debapriya Adhikary"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg 
           h-auto rounded-2xl shadow-xl object-cover 
           grayscale hover:grayscale-0 
           transition duration-500"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">

          <p className="text-base md:text-lg leading-relaxed text-justify">
            Debapriya Adhikary is a distinguished and internationally acclaimed Hindustani Classical vocalist, recognized as an “A” Grade artist by All India Radio and Doordarshan. With over three decades of rigorous training and a rich lineage of musical mentorship, he embodies the essence of traditional Indian classical music while innovating within the genre. Debapriya’s artistry is marked by a mellifluous voice, technical mastery, and a deep commitment to cultural preservation and education. Debapriya Adhikary stands as a beacon of Hindustani Classical music, blending tradition with innovation. His multifaceted career as a performer, educator, and cultural ambassador continues to inspire and elevate the global appreciation of Indian classical arts. His commitment to excellence, cultural preservation, and community outreach makes him a valuable partner for cultural institutions, educational programs, and artistic collaborations worldwide.

          </p>

          

          {/* View More Button */}
          <div className="text-center md:text-left">
            <a
              href="/about"
              className="inline-block border border-[#2b2a2a] px-6 py-3 
                         text-sm font-semibold tracking-wide 
                         hover:bg-[#1c1c1c] hover:text-white 
                         transition duration-300 rounded-full"
            >
              View More →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;