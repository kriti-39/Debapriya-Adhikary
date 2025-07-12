import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom'; // Importing Link for navigation

const NavMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About', link: '/about' },
  { id: 3, title: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="py-6 px-6 bg-transparent text-white">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Logo</div>

            {/* nav menu for desktop */}
            <ul className="hidden md:flex gap-4">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff]"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* hamburger icon for mobile */}
            <div className="md:hidden" onClick={toggleMobileMenu}>
              <GiHamburgerMenu className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleMobileMenu} // Close menu if the overlay is clicked
      >
        <div className="fixed top-0 left-0 w-2/3 bg-gray-800 text-white p-6">
          <ul className="flex flex-col gap-6">
            {NavMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="text-xl uppercase hover:bg-primary duration-200 rounded-md"
                  onClick={toggleMobileMenu} // Close menu after click
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
