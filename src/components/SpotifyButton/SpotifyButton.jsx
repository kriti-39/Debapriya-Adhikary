// src/components/SpotifyButton/SpotifyButton.jsx

import React from "react";
import { FaSpotify } from "react-icons/fa";

const SpotifyButton = () => {
  return (
    <a
      href="https://open.spotify.com/artist/46ClZdZ6yv7I0rJVfUONEC?si=BokYxnKtSnmEtp1vBU2Nxg"   // 🔁 Replace with actual Spotify link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-10 bottom-6  right-6 md:right-10 z-50 
                 bg-[#1c1c1c] text-white 
                 p-1 rounded-full 
                 shadow-lg 
                 hover:bg-black 
                 hover:scale-105 
                 transition duration-300"
    >
      <FaSpotify className="text-4xl md:text-5xl" />
    </a>
  );
};

export default SpotifyButton;