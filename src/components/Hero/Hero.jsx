// src/components/Hero/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="px-10 md:px-20 relative h-screen w-full bg-no-repeat bg-cover bg-center bg-[center_10%] flex items-center  text-white"
      style={{
        backgroundImage: "url('public/assets/IMG-20250810-WA0014.jpg')",
      }}
    >
      {/* Overlay */}
      <div className=" absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-left px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-[#f5e6d3]">
          Debapriya Adhikary
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide mb-8 text-[#f5e6d3]">
          Hindustani Classical Vocalist | Educator | Filmmaker | Cultural Ambassador
        </p>
        <a
          href="#about"
          className="inline-block bg-[#d2b48c] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#c9a97f] transition duration-300"
        >
          Explore My Work
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="animate-bounce text-sm tracking-wide text-gray-200">
          ↓ Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Hero;
