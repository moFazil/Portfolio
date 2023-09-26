import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${scrollPosition > 0
          ? `bg-white shadow-md`
          : "bg-transparent"
        } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div 
        data-aos="fade-down"
         className="logo">
          <Link

            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            Portfolio.
          </Link>
        </div>
        <div 
        data-aos="fade-down"
         className="nav-items flex items-center space-x-11">
          
          
            {navItems.map((item) => (
  <ul className=" list-none md:hidden">            
  <li
    key={item.id}
    className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
  >
    <a
      onClick={() => toggleNav(item.name)}
      href={`#${item.name}`}
      className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
        item.name === activeIndex ? "text-yellow-600" : ""
      }`}
    >
      {item.name}
    </a>
  </li>
  </ul>
))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;