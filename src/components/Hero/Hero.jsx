import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css"; // Keep it if your heading or navbar uses styles from here

const Hero = () => {
  return (
    <main className="relative">
      <div className="relative z-10">
        <div className="container text-black">
          {/* Navbar */}
          <Navbar />

          {/* Heading only */}
          <section className="min-h-screen flex items-center justify-center">
            <h1 className="text-5xl lg:text-[100px] font-bold uppercase text-center">
              Sample Project
            </h1>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
