// src/pages/About.jsx

import React from "react";

const AboutPg = () => {
  return (
    <section className="bg-[#f6f6f6] text-[#1c1c1c] py-20 md:py-28 px-8 md:px-20">
      <div className=" mx-auto space-y-10">

        {/* ================= SECTION 1 ================= */}
        <div className=" md:px-10 grid md:grid-cols-2 gap-6 md:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold">
              About Deva
            </h1>

            <p className="text-justify md:text-lg leading-relaxed text-[#1c1c1c]">
              “I didn’t begin learning music with the intention of becoming a professional performer. My mother always said that music is the greatest form of wisdom—something I should embrace as a lifelong companion. To her, music was an essential part of life that demanded sincere dedication. She never showed any leniency, waking me up at chilly dawns, sometimes even scolding me. Today, I truly understand the value of those moments. They have shaped me into an open-minded person, ready to accept whatever comes my way, as I believe music keeps me connected to the Supreme,” says Debapriya with a smile. Debapriya Adhikary was born and brought up in the industrial township of Sindri in Jharkhand, in a simple, educated Bengali family. From childhood, he showed a natural inclination toward the arts. He never formally learned the seven notes—Sa, Re, Ga, Ma—by sitting with a teacher. Instead, he absorbed them by listening to his mother, Anita Adhikary, sing and practice. She worked at FCIL while also managing a busy household. Anita Adhikary was herself a disciple of Pt. Jivnath Jha, popularly known as Taanraj.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/assets/aboutImg3.jpg"
              alt="Debapriya Adhikary"
              className="w-full rounded-xl shadow-md object-cover grayscale"
            />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        {/* ===== MUSICAL JOURNEY SECTION ===== */}
<div className="space-y-4 md:px-10">

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-serif font-bold">
    Musical Journey
  </h2>

  {/* Small Intro Paragraph (Full Width) */}
  <p className="text-justify md:text-lg leading-relaxed text-[#1c1c1c]">
    Recognizing his interest and admiration for music, his mother nurtured him with the rudiments of the art for several years. Realizing the spark in her son, she became determined to provide him with the best training. She took him to Pt. Samaresh Chawdhury of the Senia and Maihar gharanas, who later accepted Debapriya as his Gandabandh disciple. From the age of eight, he trained under him for fourteen years. His mother would travel long distances from Sindri to Durgapur to take him to his Guru. For her, music was a discipline that allowed no excuses—be it weather, festivals, or any circumstance. “Mom never allowed any excuse when it came to learning. I remember once she got completely drenched in heavy rain while taking me and my younger brother to the railway station. There were no vehicles due to waterlogging, and my father was away on work. She knew we would get dry clothes on the train, but she remained wet, standing near the door for four hours just to dry herself—yet she never suggested skipping the class,” Debapriya recalls.
  </p>

  {/* Image + Text Grid */}
  <div className="grid md:grid-cols-2 gap-5 md:gap-16 items-start">

    {/* LEFT IMAGE */}
    <div>
      <img
        src="/assets/aboutImg2.jpg"
        alt="Musical Journey"
        className="w-full rounded-xl shadow-md object-cover grayscale"
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="space-y-4">
      <p className="text-justify md:text-lg leading-relaxed text-[#1c1c1c]">
         Debapriya’s voice is not only a delight for music lovers but also an experience of both subtlety and strength. Under Pt. Chawdhury’s guidance, he developed deep insights into voice culture, smoothness, and clarity in executing intricate trills. His musical journey further flourished under the legendary Padma Vibhushan awardee Dr. Girija Devi of the Benaras gharana, with whom he trained as a Gandabandh disciple for eleven years. Under her guidance, he mastered forms such as Thumri, Tappa, Tap-Thumri, Dadra, Kajri, Jhula, and also gained knowledge of rare compositions along with the khayal tradition of Benaras. Dr. Girija Devi enriched his artistry with strength, depth, and the vision to go beyond mere notes and words. Debapriya also received valuable guidance from Pt. Kumar Prasad Mukherjee of the Agra and Rampur-Sahaswan traditions, who expanded his creative thinking and artistic expression. He was further nurtured by Pt. Vijay Kichlu of the Agra gharana, who gifted him numerous bandishes and a refined perspective on the technical beauty of ragas. Additionally, through collaboration and duet practice with Samanwaya Sarkar, and by listening to masters of various traditions, he developed many subtle and refined musical elements. 


      </p>
    </div>

  </div>

</div>

        {/* ================= FULL WIDTH PARAGRAPH ================= */}
        <div>
          <p className=" md:px-10 text-justify md:text-lg leading-relaxed text-[#1c1c1c] ">
             His ability to blend tradition with innovation, combined with over three decades of rigorous training under masters and stalwarts of Indian classical music, sets him apart. Debapriya is an A-graded artiste of All India Radio, a National and President’s Award winner, and one of the finest vocalists of the younger generation. His silken voice and exceptional command over octaves define his artistry. His singing is marked by both elegance and grandeur, elevating listeners to profound emotional experiences. His clarity and precision in executing gamaks, intricate taans (trills), meends (glides between notes), chhuts (sharp note transitions), and swargam (note articulation) have earned him admiration worldwide. His deep understanding of voice ensures that even the most complex elements remain soothing to the ear. Debapriya’s curiosity and passion for integrating art with science led him to explore Pranic Healing under the school of Master Choa Kok Sui, along with fitness studies, enriching him both physically and emotionally. During his childhood, he also trained in Kathak dance under Smt. Ajanta Jha, a disciple of Pt. T. L. Rana, for seven years, which contributed significantly to his artistic development. With his dedication and gifted abilities, Debapriya has earned recognition across the globe. He completed his Master’s degree in Music and was awarded the Junior Research Fellowship by the Ministry of Culture, Government of India, for his research on “History of Thumri and the Contribution of Girija Devi.” At present, Debapriya continues to refine his artistry under the guidance of Pt. Uday Bhawalkar, focusing on the nuances and fundamentals of Dhrupad.


          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutPg;