// src/components/Footer/Footer.jsx

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

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-[#f6f6f6] py-10 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Contact
          </h3>

          <ul className="space-y-4 text-sm md:text-base text-white/80">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-white/60" />
              <span>+91 9038674555</span>
            </li>

            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-white/60" />
              <span>musingswithdeva@gmail.com</span>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="mt-1 text-white/60" />
              <span>
                A wing 1804, Aarambh Tower (Satellite Developers)
Shivaji Nagar, Kurar Village, Malad East , Mumbai - 400097
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 md:text-right">
          <h4 className="text-3xl font-serif font-semibold mb-6 md:mb-6">
            Connect
          </h4>

          <ul className="space-y-4 text-sm md:text-base">
            <li>
              <a
                href="https://www.instagram.com/musingswithdeva/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition md:justify-end text-white/80"
              >
                <FaInstagram /> <span>@musingswithdeva</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/Debapriyaadhikarysings/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition md:justify-end text-white/80"
              >
                <FaFacebookF /> <span>Debapriya Adhikary</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/debapriya-adhikary-177214b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition md:justify-end text-white/80"
              >
                <FaLinkedinIn /> <span>Debapriya Adhikary</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@DebapriyaAdhikary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition md:justify-end text-white/80"
              >
                <FaYoutube /> <span>Debapriya Adhikary</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Debapriya Adhikary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;