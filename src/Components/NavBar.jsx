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

  isMenuVisible
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav
      id="nav"
      className={`top-0 fixed w-full z-50 shadow-sm bg-gradient-to-r from-blue-200 via-blue-600 to-blue-800 pr-6 py-2 h-20 ${
        isMobile
          ? "flex justify-between items-center"
          : "mx-auto flex justify-between items-center"
      }`}
    >
      <a href="##home">
        <img className="w-24 ml-4" src={logo} alt="Logo" />
      </a>
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
              className="fixed top-0 left-0 h-full w-1/2 bg-blue-800 z-20 transition-transform ease-in-out duration-300 transform translate-x-0"
            >
              <a href="##home">
                <img src={logo} className="ml-10 h-20" />
              </a>
              <ul className="flex flex-col items-center pt-20">
                <li className="mb-4" onClick={toggleMenu}>
                  <a className="text-white hover:underline" href="##home">
                    Home
                  </a>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="/##categories" className="text-white">
                    Categories
                  </a>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="##about" className="text-white">
                    A propos de nous
                  </a>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="##why" className="text-white">
                    Pourquoi KS Scientifique
                  </a>
                </li>
                <li className="mb-4" onClick={toggleMenu}>
                  <a href="/#contact" className="text-white">
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

      {!isMobile && (
        <ul className="lg:flex space-x-9 pr-20 hidden">
          <li>
            <a className="text-white hover:underline" href="##home">
              Home
            </a>
          </li>
          <li>
            <a href="##categories" className="text-white hover:underline">
              Categories
            </a>
          </li>
          <li>
            <a href="##about" className="text-white hover:underline">
              A propos de nous
            </a>
          </li>
          <li>
            <a href="##why" className="text-white hover:underline">
              Pourquoi KS Scientifique
            </a>
          </li>
          <li>
            <a href="/#contact" className="text-white hover:underline">
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
