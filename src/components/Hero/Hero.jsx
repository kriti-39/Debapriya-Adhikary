import React from "react";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#1b100b] to-[#2e1f17] text-white">
<Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between h-full  md:px-20">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex justify-center items-center bg-[#1b100b]">
  <img
    src="/assets/blur_edges (1).png"  // ✅ Correct path from public folder
    alt="Debapriya Adhikary"
    className="h-[60vh] md:h-[80vh] w-auto object-contain"
  />
</div>


        {/* Right Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-end text-right min-h-[70vh]">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
            Debapriya Adhikary
          </h1>

          <p className="text-lg md:text-xl font-light mb-2">
            Hindustani Classical Vocalist | Educator | Filmmaker | Cultural Ambassador
          </p>

          <p className="italic text-[#f5deb3] text-xl md:text-2xl mt-4 mb-8">
            Voice of Tradition. Spirit of Innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-end gap-4 flex-wrap">
            <a
              href="#music"
              className="border border-[#f5deb3] text-[#f5deb3] px-6 py-2 rounded-full hover:bg-[#f5deb3] hover:text-black transition"
            >
              Explore Music
            </a>
            <a
              href="#workshops"
              className="border border-[#f5deb3] text-[#f5deb3] px-6 py-2 rounded-full hover:bg-[#f5deb3] hover:text-black transition"
            >
              Book a Workshop
            </a>
            <a
              href="#media"
              className="border border-[#f5deb3] text-[#f5deb3] px-6 py-2 rounded-full hover:bg-[#f5deb3] hover:text-black transition"
            >
              Watch Film
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
