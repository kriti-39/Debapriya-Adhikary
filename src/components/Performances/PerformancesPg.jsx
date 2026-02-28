// src/pages/Performances.jsx

import React, { useState } from "react";
import PerformancesCarousel from "./Performances";

/* ======================
   DATA
====================== */

const nationalConcerts = [
  {
    city: "Pune",
    festivals: [
      "Sawai Gandharva Sangeet Mahotsav",
      "Srimath Dagru Seth Halwai Ganpati Sangeet Mahotsav",
      "Ganavardhan",
      "Pune Festival",
    ],
  },
  {
    city: "Varanasi",
    festivals: [
      "Mahamrityunjay Mahotsav",
      "Gangamahotsav",
      "Pt. Ram Sahai Foundation",
      "Kalaprakash",
      "Ras-Kalash Sanstha",
    ],
  },
  {
    city: "Kolkata",
    festivals: [
      "Sangeet Piyasi",
      "West Bengal Rajya Sangeet Music Festival",
      "Institute of Culture, Ramkrishna Mission",
      "Navarang",
    ],
  },
  {
    city: "New Delhi",
    festivals: ["India Habitat Centre", "India International Centre", "Shadaj"],
  },
  {
    city: "Bangalore",
    festivals: [
      "Swar Samrat Festival",
      "Pt. Mallikarjun Music Festival DHWANI",
    ],
  },
  {
    city: "Goa",
    festivals: ["Swar Mangesh Festival", "Samrat Sangeet Sammelan"],
  },
  {
    city: "Jodhpur",
    festivals: [
      "Swar–Sudha & Kalasri Sangeet Sansthan",
      "Mehraangad Fort Trust",
    ],
  },
  {
    city: "Mumbai",
    festivals: ["National Centre for Performing Arts"],
  },
  {
    city: "Hyderabad",
    festivals: ["Secunderabad Club"],
  },
  {
    city: "Ahmedabad",
    festivals: ["Saptak"],
  },
  {
    city: "Nagpur",
    festivals: ["Kalidas Samaroh"],
  },
  {
    city: "Aurangabad",
    festivals: ["Ruturang Mahotsav"],
  },
  {
    city: "Kanpur",
    festivals: ["Laxmi Devi Lalit Kala Academy"],
  },
  {
    city: "Dhanbad",
    festivals: ["Sindri Officer’s Club (FCIL Sindri)"],
  },
  {
    city: "Dombivalli",
    festivals: ["Chaturang Chaitrapallavi Sangeet Mahotsav"],
  },
  {
    city: "Dibrugarh",
    festivals: ["Chawlkowa Music College Sangeet Sammelan"],
  },
  {
    city: "Jalgaon",
    festivals: ["Swargiya Vasantrao Chandorkar Smriti Pratisthan"],
  },
  {
    city: "Lonavla",
    festivals: ["Acharya DevSarma Foundation"],
  },
  {
    city: "Nashik",
    festivals: ["Saptak"],
  },
  {
    city: "Bhubaneswar",
    festivals: ["Srjan (Founded by Guru Keluchran Mahapatra)"],
  },
  {
    city: "Ranchi",
    festivals: ["Jharkhand Sthapna Divas"],
  },
  {
    city: "Belur",
    festivals: ["Belur Math"],
  },
  {
    city: "Trivandrum",
    festivals: ["Swathi Tirunal Sangeetotsav"],
  },
  {
    city: "Allahabad",
    festivals: ["Prayag Sangeet Samiti"],
  },
  {
    city: "Shaktinagar, UP",
    festivals: ["Sakhti Sardotsav"],
  },
];

const internationalFestivals = [
  {
    country: "Australia",
    events: [
      "Blue Mountains Music Festival, Katoomba – 2017",
      "Brunswick Music Festival, Melbourne – 2017",
      "PARRAMASALA for South Asian Arts – 2017, 2015",
      "National Multicultural Festival – 2008",
    ],
  },
  {
    country: "United Kingdom",
    events: [
      "Mananan International Festival for Music and Arts, Isle of Man – 2008, 2017",
      "WOMAD UK – 2013",
      "Birmingham & Stourbridge – 2004",
    ],
  },
  {
    country: "France",
    events: [
      "Festival Les Orientales, Saint-Florent-le-Vieil – 2010",
      "Festival Autres Rivages, Uzes – 2010",
      "Voix d'été en Creuse – 2009",
      "Festival International de Musique d'Uzerche – 2009",
    ],
  },
  {
    country: "Germany",
    events: [
      "High Peace Festival, Augsburg – 2013",
    ],
  },
  {
    country: "USA",
    events: [
      "Learnquest Music Festival, Boston – 2010",
    ],
  },
  {
    country: "Russia",
    events: [
      "Sitar Festival, St Petersburg – 2018",
    ],
  },
  {
    country: "Albania",
    events: [
      "National Theatre of Operas and Ballet, Tirana – 2010 (Mother Teresa Birth Centenary)",
    ],
  },
  {
    country: "Portugal",
    events: [
      "Festival in Evora – 2010",
    ],
  },
  {
    country: "Spain",
    events: [
      "Deia International Festival of Music – 2009",
    ],
  },
];

const otherAbroad = [
  {
    country: "USA",
    events: [
      "Robert Browning and Associates – 2019",
      "Learnquest Music Festival, Boston – 2012",
      "Indian Music Society, Houston – 2012",
      "Swaradhana, Tampa – 2012",
      "Hindu Temple of South Florida, Fort Myers – 2012",
      "HarmonyOm Anniversary (World Music Institute & WKCR), New York – 2010",
      "Basant Bahar, San Jose – 2010",
      "Vedanta Society, Providence – 2010",
      "Vedanta Society, Chicago – 2010",
      "Vedanta Society, Seattle – 2010",
      "Jhankar, Cincinnati – 2010",
      "Basant Sandhya, New Jersey – 2010",
      "World of Sounds (CASC & ISAH), Connecticut – 2010",
    ],
  },
  {
    country: "Australia",
    events: [
      "Funhouse, Bega – 2017",
      "Holi Mahotsav, Bharatiya Vidya Bhavan Sydney – 2011",
      "Kulcha Arts, Perth – 2011",
      "Nexus Multicultural Arts, Adelaide – 2011",
      "Boite, Melbourne – 2011",
      "Theo Notaras Multicultural Arts, Canberra – 2011",
      "Vedanta Society, Sydney – 2008",
      "Bengali Cultural Society, Brisbane – 2008",
      "Bengali Association of Canberra – 2008",
      "World Peace Day, Sydney Olympic Park – 2009",
      "South Indian Fine Arts Association, Canberra – 2009",
      "Bharatiya Vidya Bhavan, Sydney – 2009",
      "Seminar at Box Hill Institute of Melbourne – 2009",
      "Indian High Commission, Canberra – 2009",
      "In Byron by Ku Promotions – 2009",
    ],
  },
  {
    country: "United Kingdom",
    events: [
      "Royal Overseas League, London – 2017",
      "Milap Festival for South Asian Music and Art (London & Liverpool) – 2009",
      "Tara Arts, London – 2008",
      "Indian Association of Manchester – 2008",
    ],
  },
  {
    country: "Germany",
    events: [
      "Elbphilharmonie, Hamburg – 2018",
    ],
  },
  {
    country: "Switzerland",
    events: [
      "TKM - Kléber-Méleau Theater, Lausanne – 2018",
    ],
  },
  
  
  {
    country: "New Zealand",
    events: [
      "Migrant Heritage Charitable Trust, Auckland – 2017",
    ],
  },
  {
    country: "France",
    events: [
      "Theatre De La Ville (Abbesses), Paris – 2013",
      "Le Rocher De Palmer, Cenon – 2013",
    ],
  },
  {
    country: "Canada",
    events: [
      "Ragamala, Calgary & Edmonton – 2013",
      "SIA of Victoria, UVIC – 2013",
      "Ragamala, Calgary – 2010",
    ],
  },
  {
    country: "Spain",
    events: [
      "Palau Marche Summer Concert Series – 2009",
      "Summer Concerts at Andratx Cultural Center – 2009",
    ],
  },
  {
    country: "India (International Seminar)",
    events: [
      "Indian Music Society, Bloomington – 2010",
    ],
  },
];

/* ======================
   ARCHIVE SECTION
====================== */

const ArchiveSection = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 md:pt-10">
      {/* Heading */}
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-2xl md:text-5xl font-serif font-semibold text-[#1f1f1f]">
          {title}
        </h2>
        <span className="md:hidden text-[#1f1f1f]/50 text-2xl">
          {open ? "−" : "+"}
        </span>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-10 mb-16">
        {items.map((item, index) => (
  <div key={index} className="space-y-3">

    {item.city && (
      <>
        <h3 className="text-lg md:text-2xl font-semibold text-[#1f1f1f]">
          {item.city}
        </h3>
        <ul className="space-y-1 text-sm md:text-base text-[#1f1f1f]/70">
          {item.festivals.map((festival, i) => (
            <li key={i}>• {festival}</li>
          ))}
        </ul>
      </>
    )}

    {item.country && (
      <>
        <h3 className="text-lg md:text-2xl font-semibold text-[#1f1f1f]">
          {item.country}
        </h3>
        <ul className="space-y-1 text-sm md:text-base text-[#1f1f1f]/70">
          {item.events.map((event, i) => (
            <li key={i}>• {event}</li>
          ))}
        </ul>
      </>
    )}

  </div>
))}
      </div>
      <div className="hidden md:block h-[1px] bg-[#1c1c1c]/20"></div>

      {/* Mobile Timeline */}
      {open && (
        <div className="md:hidden mt-2 relative pl-6 space-y-6">
          <div className="absolute left-3 top-2 bottom-0 w-[1px] bg-[#1f1f1f]/20"></div>
{items.map((item, index) => (
  <div key={index} className="relative">

    <span className="absolute top-2 left-[-17px] w-2.5 h-2.5 bg-[#1f1f1f] rounded-full"></span>

    {item.city && (
      <>
        <h3 className="text-base px-4 font-semibold text-[#1f1f1f]">
          {item.city}
        </h3>
        <ul className="space-y-1 px-4 text-sm text-[#1f1f1f]/70 mt-2">
          {item.festivals.map((festival, i) => (
            <li key={i}>• {festival}</li>
          ))}
        </ul>
      </>
    )}

    {item.country && (
      <>
        <h3 className="text-base px-4 font-semibold text-[#1f1f1f]">
          {item.country}
        </h3>
        <ul className="space-y-1 px-4 text-sm text-[#1f1f1f]/70 mt-2">
          {item.events.map((event, i) => (
            <li key={i}>• {event}</li>
          ))}
        </ul>
      </>
    )}

  </div>
))}
        </div>
      )}
      <div className=" md:hidden h-[1px] bg-[#1c1c1c]/20 mt-5"></div>
    </div>
  );
};

/* ======================
   MAIN PAGE
====================== */

const PerformancesPg = () => {
  return (
    <>
      {/* ===== DARK CAROUSEL SECTION ===== */}
      <div className="bg-[#1c1c1c] py-2 pt-10 md:px-20 md:pb-0">
        <div className="mx-auto">
          <PerformancesCarousel />
        </div>
      </div>

      {/* ===== WHITE ARCHIVE SECTION ===== */}
      <div className="bg-[#f4f3f1] py-4 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-4">
          <ArchiveSection title="National Concerts" items={nationalConcerts} />

          <ArchiveSection
            title="International Music Festivals"
            items={internationalFestivals}
          />

          <ArchiveSection title="Other Concerts Abroad" items={otherAbroad} />
        </div>
      </div>
      {/* ===== Bottom Images Section ===== */}
      <div className="bg-[#f4f3f1] py-8 pb-14 md:pb-20 md:pt-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/assets/P3.jpg"
            alt="Performance Image 1"
            className="w-full h-[350px] md:h-[520px] object-cover rounded-xl grayscale"
          />

          <img
            src="/assets/P1.jpg"
            alt="Performance Image 2"
            className="w-full h-[350px] md:h-[520px] object-cover rounded-xl grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default PerformancesPg;
