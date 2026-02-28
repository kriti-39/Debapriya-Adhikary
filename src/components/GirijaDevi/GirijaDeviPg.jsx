// src/pages/GirijaPage.jsx

import React from "react";

const GirijaPg = () => {
  return (
    <section className="bg-[#f4f3f1] text-[#1f1f1f] pt-20 pb-10 px-8 md:px-20">
      
      {/* CENTERED CONTAINER */}
      <div className="md:px-10 mx-auto space-y-6 md:space-y-10">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight md:pt-10">
          GIRIJA : A Lifetime in Music
        </h1>

        {/* ================= HERO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-4">
            <p className="text-[#1f1f1f] leading-relaxed text-justify md:text-lg">
              <strong>Girija – A Lifetime in Music</strong> is a heartfelt tribute
              by the duo to their revered Gurumaa, the legendary Girija Devi.
              The film reflects not only her musical brilliance but also the
              spiritual depth and human simplicity that defined her life.
            </p>
            <p className="hidden md:block text-lg ">
            “Our thought was to let the world know about her vision, through which
            she could build a beautiful bridge between the living world and the
            spiritual realms. She could effortlessly break through paradigms and
            create beauty with simple words, relating them to daily life. We used
            to be awestruck by her simplicity, nurtured in the midst of her divinity.”
            … the duo says. “Life was never so beautiful until we began to see music through her,
            and understand the subtleties she revealed with every word of music she
            uttered.” … they add.
          </p>
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
<div className="flex justify-center md:justify-end">

  {/* Mobile Image */}
  <img
    src="/assets/girija.png"
    alt="Girija Devi"
    className="w-full max-w-[360px] h-[450px] object-cover rounded-xl grayscale shadow-lg md:hidden"
  />

  {/* Desktop Image */}
  <img
    src="/assets/GirijaDesktop.jpg"
    alt="Girija Devi"
    className="hidden md:block w-[550px] h-[400px] object-cover rounded-xl grayscale shadow-lg"
  />

</div>

        </div>

        {/* ================= VIDEO SECTION ================= */}
        <div className="w-full py-6">
          <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/Ooz9sy3YHeo"
              title="Girija – A Lifetime in Music"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* ================= MAIN TEXT ================= */}
        <div className="space-y-8 text-[#1f1f1f] leading-relaxed md:text-lg text-justify md:pb-10">

          <p className="md:hidden">
            “Our thought was to let the world know about her vision, through which
            she could build a beautiful bridge between the living world and the
            spiritual realms. She could effortlessly break through paradigms and
            create beauty with simple words, relating them to daily life. We used
            to be awestruck by her simplicity, nurtured in the midst of her divinity.”
            … the duo says.
          </p>

          <p className="md:hidden">
            “Life was never so beautiful until we began to see music through her,
            and understand the subtleties she revealed with every word of music she
            uttered.” … they add.
          </p>

          <p>
            This national and international award-winning documentary offers a
            visual journey through the legend’s music, philosophy, ideas, and
            inspiration. It portrays the struggle of a woman navigating the
            socio-economic transformations of India’s pre- and post-independence
            eras. The film highlights how she upheld her artistic integrity in a
            male-dominated society and emerged as an enduring example of strength
            and grace—an iron-willed woman.
          </p>

          <p>
            The film features anecdotes and interviews with stalwarts and legends
            such as Ravi Shankar, Kishori Amonkar, Abdul Rashid Khan,
            Birju Maharaj, Amjad Ali Khan, and Rajan & Sajan Mishra,
            among many others. It stands as a valuable resource for students,
            connoisseurs, and lovers of Indian classical music.
          </p>

          <p>
            “We are immensely grateful to the entire team of the film, including
            Madhu Chandra and Sudha Datta as producers; our co-director and editor
            Sankalp Meshram; cinematographers Naiyer Ghufran and Prabal Bose;
            sound engineer Partha Sarathi Sanyal; sound mixer Ajay PB; and many
            more, for making this dream project a real historical gem.”
            … Debapriya Adhikary & Samanwaya Sarkar.
          </p>

        </div>

      </div>
    </section>
  );
};

export default GirijaPg;