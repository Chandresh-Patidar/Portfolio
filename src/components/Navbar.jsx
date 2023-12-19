import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { clogo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

// Navbar
const Navbar = () => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      setToggle(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={clogo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Chandresh&nbsp;<span className="hidden lg:block">| Developer</span>
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => !link?.link && setActive(link.title)}
            >
              {link?.link ? (
                <Link to={link.link}>{link.title}</Link>
              ) : (
                <Link to={`${link.id}`}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            ref={node}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    !link?.link && setToggle(!toggle);
                    !link?.link && setActive(link.title);
                    setToggle(false);
                  }}
                >
                  {link?.link ? (
                    <Link to={link.link} rel="noreferrer noopener">
                      {link.title}
                    </Link>
                  ) : (
                    <Link to={`#${link.id}`}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
