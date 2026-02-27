// src/components/Awards/Awards.jsx

import React from "react";

const awardsChronology = [
  {
    year: "1994",
    title:
      "First Prize at Inter District Music Competition (Hindustani Classical)",
    desc: "Dhanbad",
  },
  {
    year: "2001",
    title: "First Prize – Akhil Bharatiya Sangeet Pratiyogita",
    desc: "Prayag Sangeet Samiti, Allahabad",
  },
  {
    year: "2001–02",
    title:
      "Inter College & East Zonal Youth Festival (AIU, Govt. of India)",
    desc: "Organized by Vinoba Bhave University & ISM Dhanbad",
  },
  {
    year: "2002",
    title: "All India Radio National Music Competition",
    desc: "Award conferred on behalf of the President of India",
  },
  {
    year: "2003",
    title: "ITC – Sangeet Research Academy Promising Artiste Award",
    desc: "Awarded by ITC–SRA, Mumbai",
  },
  {
    year: "2004",
    title: "Golden Talent Contest",
    desc: "Organised by Pandit Ravi Kichlu Foundation",
  },
  {
    year: "2004",
    title:
      "Selected to Perform at Pt. Jasraj Auditorium, New York",
    desc:
      "Talent Hunt by Acharya Viswa Nath Dev Sharma Art Foundation, organized by Vedic Heritage",
  },
  {
    year: "2006",
    title: "Master of Music – Top Marks",
    desc: "University of Calcutta",
  },
  {
    year: "2018",
    title: "National Film Award",
    desc:
      "Conferred by The Hon’ble President of India for the film 'Girija – A Lifetime In Music'",
  },
  {
    year: "2019",
    title: "Person Who Cares for Art of the East People",
    desc:
      "Sharq Taronalari International Music Festival, supported by UNESCO & Ministry of Culture, Govt. of Uzbekistan",
  },
];

const Awards = () => {
  return (
    <>
      {/* ===== DARK SECTION – ACHIEVEMENTS ===== */}
      <section className="bg-[#1c1c1c] text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl md:py-10 md:text-6xl font-serif font-bold mb-12">
            Achievements
          </h2>

          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[1px] bg-white/10"></div>

            <div className="space-y-10">

              {awardsChronology.map((award, index) => (
                <div key={index} className="relative pl-10 md:pl-14">

                  {/* Dot */}
                  <span className="absolute left-[6px] md:left-[10px]  w-3.5 h-3.5 bg-white/90 rounded-full"></span>

                  {/* Year */}
                  <p className="text-white/40 tracking-[0.35em] text-sm mb-3">
                    {award.year}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white/90 leading-snug">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed max-w-3xl">
                    {award.desc}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ===== LIGHT SECTION – FELLOWSHIPS & AFFILIATIONS ===== */}
      <section className="bg-[#f6f6f6] text-[#2b2a2a] py-10 px-8 md:px-40">
        <div className=" mx-auto space-y-10">

          {/* Fellowships */}
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Fellowships & Scholarships
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-[#1c1c1c]">
              <li>2015–16 – National Junior Fellowship, Ministry of Culture, Govt. of India</li>
              <li>2003–05 – National Scholarship, Ministry of Culture, Govt. of India</li>
              <li>2005–10 – Jnana Pravaha Scholarship Recipient</li>
            </ul>
          </div>

          <div className="h-[1px] bg-[#1c1c1c]/20"></div>

          {/* Affiliations */}
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Professional Affiliations & Certifications
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-[#1c1c1c]">
              <li>Member, Indian Council for Cultural Relations (ICCR)</li>
              <li>Collaborates with Samanwaya Sarkar (DevaSaman)</li>
              <li>Diploma in Personal Fitness Training & Certified Nutritionist (2021)</li>
              <li>Associate Certified Pranic Healer</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Awards;