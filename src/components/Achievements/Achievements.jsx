// src/components/About/About.jsx

import React from "react";

const Achievements = () => {
  return (
    <section
      id="about"
      className="py-16 bg-[#2c2c2c] text-[#f5e6d3]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-10 lg:px-20">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Achievements
          </h2>
          <p className="text-lg leading-relaxed">
            Debapriya Adhikary is a renowned Hindustani Classical Vocalist,
            Educator, Filmmaker, and Cultural Ambassador. With decades of
            dedication to Indian classical music, his artistry blends deep
            tradition with expressive innovation.
          </p>
          <p className="text-base text-[#f5e6d3]">
            He has represented Indian classical arts on prestigious international
            platforms, mentored upcoming musicians, and continues to preserve and
            propagate the rich heritage of Hindustani music through his work.
          </p>
          <a
            href="#performances"
            className="inline-block mt-4 text-[#f5e6d3] font-semibold hover:underline"
          >
            View Performances →
          </a>
        </div>
       
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/IMG-20250810-WA0011.jpg"
            alt="Debapriya Adhikary"
            className="w-full max-w-md h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        
        
        
      </div>
    </section>
  );
};

export default Achievements;
