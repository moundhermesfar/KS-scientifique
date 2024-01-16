import React, { useState, useEffect } from "react";
import logo from "../assets/logo-img.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
      setIsMobile(mobileMediaQuery.matches);
    };

    const handleClickOutsideMenu = (event) => {
      if (isMenuVisible && isMobile) {
        const menuContainer = document.getElementById("nav");
        if (menuContainer && !menuContainer.contains(event.target)) {
          setIsMenuVisible(false);
        }
      }
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    window.addEventListener("click", handleClickOutsideMenu);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [isMenuVisible, isMobile]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav
      id="nav"
      className={`top-0 fixed w-full z-50 shadow-sm bg-slate-950 pr-6 py-2 h-20 ${
        isMobile
          ? "flex justify-between items-center"
          : "mx-auto flex justify-between items-center"
      }`}
    >
      <img className="w-24 ml-4" src={logo} alt="Logo" />

      {isMobile && (
        <>
          <button
            className="text-white focus:outline-none text-[23px]"
            onClick={toggleMenu}
          >
            {isMenuVisible ? "✖" : "☰"}
          </button>

          {isMenuVisible && (
            <div
              id="mobileMenuContainer"
              className="fixed top-0 left-0 h-full w-1/2 bg-slate-950 z-20 transition-transform ease-in-out duration-300 transform translate-x-0"
            >
              <img src={logo} className="ml-10 h-20" />
              <ul className="flex flex-col items-center pt-20">
                <li className="mb-4" onClick={toggleMenu}>
                  <Link href="#" to={"/"} className="text-white">
                    Home
                  </Link>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="#categories" className="text-white">
                    Categories
                  </a>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="#about" className="text-white">
                    A propos de nous
                  </a>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="#why" className="text-white">
                    Pourquoi KScientifique
                  </a>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="#contact" className="text-white">
                    Contacts
                  </a>
                </li>
                <li className="mb-4">
                  <Link to={"/admin"} className="text-white">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      )}

      {/* Desktop Menu */}
      {!isMobile && (
        <ul className="lg:flex space-x-9 pr-20 hidden">
          <li>
            <Link href="#" to={"/"} className="text-white hover:underline-red">
              Home
            </Link>
          </li>
          <li>
            <a href="#categories" className="text-white hover:underline-red">
              Categories
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:underline-red">
              A propos de nous
            </a>
          </li>
          <li>
            <a href="#why" className="text-white hover:underline-red">
              Pourquoi KScientifique
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:underline-red">
              Contacts
            </a>
          </li>
          <li>
            <Link to={"/admin"} className="text-white">
              Admin
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
