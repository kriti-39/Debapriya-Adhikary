// src/components/Navbar/Navbar.jsx

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavMenu = [
  { id: 1, title: "Home", path: "/", type: "route" },
  { id: 2, title: "About", path: "/about", type: "route" },
  { id: 3, title: "Performances", path: "/performances", type: "route" },
  { id: 4, title: "DevaSaman", path: "/devasaman", type: "route" },
  { id: 5, title: "Learning", path: "/learning", type: "route" },
  { id: 6, title: "Girija", path: "/girija", type: "route" },
  { id: 7, title: "Gallery", path: "/gallery", type: "route" },
  { id: 8, title: "Achievements", path: "/achievements", type: "route" },
  { id: 9, title: "Contact", path: "/contact", type: "route" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 w-full z-40 transition-transform duration-500 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="backdrop-blur-md bg-[#1c1c1c]/70 text-white md:py-5 px-6 py-3 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link
              to="/"
              className="text-xl md:text-2xl font-serif font-bold tracking-widest"
            >
              DA
            </Link>

            <ul className="hidden md:flex gap-8 text-lg tracking-wider">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  {menu.type === "route" ? (
                    <Link
                      to={menu.path}
                      className="text-white/80 hover:text-white transition"
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <a
                      href={menu.path}
                      className="text-white/80 hover:text-white transition"
                    >
                      {menu.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white/80 hover:text-white transition"
            >
              <GiHamburgerMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE DRAWER (OUTSIDE NAV) ===== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-[#1c1c1c] text-white p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white transition"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            <ul className="flex flex-col gap-8 text-lg tracking-wider">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  {menu.type === "route" ? (
                    <Link
                      to={menu.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/80 hover:text-white transition"
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <a
                      href={menu.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/80 hover:text-white transition"
                    >
                      {menu.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
