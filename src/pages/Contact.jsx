// src/pages/ContactPage.jsx

import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#f4f3f1] text-[#1f1f1f] pt-20 pb-20 px-8 md:pt-20 md:px-20">

        <div className="h-full md:h-screen mx-auto space-y-16">

          {/* Heading + Intro */}
          <div className="space-y-6">
            <h1 className="text-3xl  md:pt-10 md:text-5xl font-serif font-semibold">
              Contact
            </h1>

            <p className="text-[#1f1f1f]/75 leading-relaxed md:text-lg max-w-3xl text-justify">
              For concert bookings, collaborations, workshops, lecture-demonstrations,
              and other professional inquiries, please feel free to get in touch.
              We look forward to connecting and sharing the richness of Indian
              classical music with audiences and institutions across the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* LEFT — CONTACT DETAILS */}
            <div>
              <ul className="space-y-8 text-base md:text-lg text-[#1f1f1f]/80">

                <li className="flex items-start gap-4">
                  <FaPhoneAlt className="mt-1 text-[#1f1f1f]/50" />
                  <span>+91 9038674555</span>
                </li>

                <li className="flex items-start gap-4">
                  <FaEnvelope className="mt-1 text-[#1f1f1f]/50" />
                  <span>musingswithdeva@gmail.com</span>
                </li>

                <li className="flex items-start gap-4 leading-relaxed">
                  <FaMapMarkerAlt className="mt-1 text-[#1f1f1f]/50" />
                  <span>
                    A wing 1804, Aarambh Tower (Satellite Developers)
                    <br />
                    Shivaji Nagar, Kurar Village, Malad East,
                    <br />
                    Mumbai - 400097
                  </span>
                </li>

              </ul>
            </div>

            {/* RIGHT — SOCIAL LINKS */}
            <div className="space-y-8 md:text-right">

              <h3 className="text-2xl md:text-3xl font-serif font-semibold">
                Connect
              </h3>

              <ul className="space-y-6 text-base md:text-lg">

                <li>
                  <a
                    href="https://www.instagram.com/musingswithdeva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-black transition md:justify-end text-[#1f1f1f]/80"
                  >
                    <FaInstagram /> <span>@musingswithdeva</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/Debapriyaadhikarysings/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-black transition md:justify-end text-[#1f1f1f]/80"
                  >
                    <FaFacebookF /> <span>Debapriya Adhikary</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/debapriya-adhikary-177214b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-black transition md:justify-end text-[#1f1f1f]/80"
                  >
                    <FaLinkedinIn /> <span>Debapriya Adhikary</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@DebapriyaAdhikary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-black transition md:justify-end text-[#1f1f1f]/80"
                  >
                    <FaYoutube /> <span>Debapriya Adhikary</span>
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default ContactPage;