import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavMenu = [
  { id: 1, title: 'Home', link: '#home' },
  { id: 2, title: 'About', link: '#about' },
  { id: 3, title: 'Performances', link: '#performances' },
  { id: 4, title: 'Learning', link: '#learning' },
  { id: 5, title: 'Gallery', link: '#gallery' },
  { id: 6, title: 'Achievements', link: '#achievements' },
  { id: 7, title: 'Contact', link: '#contact' },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false); // Scroll down
      } else {
        setShowNav(true); // Scroll up
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
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-black bg-opacity-40 text-white px-2 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold tracking-wide">DA</h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium tracking-wider">
            {NavMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="hover:text-yellow-300 transition duration-200"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            <GiHamburgerMenu className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40" onClick={toggleMobileMenu}>
          <div
            className="bg-gray-900 text-white w-2/3 h-full p-6"
            onClick={(e) => e.stopPropagation()} // prevent parent onClick
          >
            <ul className="flex flex-col gap-6 mt-10 text-lg tracking-wider">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="hover:text-yellow-300 transition duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
