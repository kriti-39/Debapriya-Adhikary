import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavMenu = [
  { id: 1, title: 'Home', link: '#' },
  { id: 2, title: 'About', link: '#' },
  { id: 3, title: 'History', link: '#' },
  { id: 4, title: 'Creator', link: '#' },
  { id: 5, title: 'Contact', link: '#' },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <main className={`fixed top-0 w-full z-50 transition-transform duration-500 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-6 px-6 bg-transparent text-white">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>.</div>
            {/* nav menu */}
            <ul className="hidden md:flex gap-4">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff]"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* hamburger icon */}
            <div className="md:hidden rounded-icons">
              <GiHamburgerMenu className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

