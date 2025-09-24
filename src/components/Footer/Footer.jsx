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
    <footer className="bg-[#1f1f1f] text-[#f5e6d3] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-6xl font-bold mb-6  inline-block">
            Contact Us
          </h3>
          <ul className="space-y-4 text-base">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#8b5e3c] mt-1 text-lg" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-[#8b5e3c] mt-1 text-lg" />
              <span>info@classicalartist.com</span>
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="text-[#8b5e3c] mt-1 text-lg" />
              <span>
                58/30 Rabindrapally, Mandir Para, Netaji Subhas Road, 
                Nona Chandanpukur, Kolkata - 700122
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:text-right md:pr-8 flex flex-col justify-end">
          <ul className="space-y-2 text-base">
            <li>
              <a
                href="https://www.instagram.com/musingswithdeva/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#8b5e3c] transition md:justify-end"
              >
                <FaInstagram className="text-lg" /> <span>@musingswithdeva</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Debapriyaadhikarysings/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#8b5e3c] transition md:justify-end"
              >
                <FaFacebookF className="text-lg" /> <span>Debapriya Adhikary</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/debapriya-adhikary-177214b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#8b5e3c] transition md:justify-end"
              >
                <FaLinkedinIn className="text-lg" /> <span>Debapriya Adhikary</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@DebapriyaAdhikary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#8b5e3c] transition md:justify-end"
              >
                <FaYoutube className="text-lg" /> <span>Debapriya Adhikary</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-[#444] pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Classical Artist. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
