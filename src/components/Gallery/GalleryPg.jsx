// src/pages/GalleryPage.jsx

import React, { useState, useEffect } from "react";

const images = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
  "/assets/6.jpg",
  "/assets/7.jpg",
  "/assets/8.jpg",
  "/assets/9.jpg",
  "/assets/10.jpg",
  "/assets/11.jpg",
  "/assets/12.jpg",
  "/assets/13.jpg",
  "/assets/14.jpg",
  "/assets/15.jpg",
  "/assets/16.jpg",
  "/assets/17.jpg",
  "/assets/18.jpg",
  "/assets/19.jpg",
  "/assets/20.jpg",
  "/assets/21.jpg",
  "/assets/22.jpg",
  "/assets/23.jpg",
  "/assets/24.jpg",
];

const GalleryPg = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // ESC key close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    if (currentIndex !== null) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section className="bg-[#1c1c1c] pt-24 pb-20 px-6 md:px-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl text-white md:text-5xl font-serif font-semibold mb-12">
          Gallery
        </h1>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openImage(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-[220px] md:h-[260px] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>

      {/* ================= LIGHTBOX ================= */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeImage}
        >

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-6 md:left-12 text-white text-3xl md:text-4xl"
          >
            ←
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Full View"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-6 md:right-12 text-white text-3xl md:text-4xl"
          >
            →
          </button>

          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

        </div>
      )}

    </section>
  );
};

export default GalleryPg;