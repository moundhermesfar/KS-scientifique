import React, { useState, useEffect } from "react";
import logo from "../assets/logo-img.png";

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
        const menuContainer = document.getElementById("root");
        if (menuContainer && !menuContainer.contains(event.target)) {
          setIsMenuVisible(false);
        }
      }
    };

    // Initial check
    checkIsMobile();

    // Listen for changes in the viewport size
    window.addEventListener("resize", checkIsMobile);

    // Listen for clicks outside the menu
    window.addEventListener("click", handleClickOutsideMenu);

    // Clean up the event listeners when the component unmounts
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
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuVisible ? "✖ Close" : "☰ Menu"}
          </button>

          {isMenuVisible && (
            <div
              id="mobileMenuContainer"
              className="fixed top-0 left-0 h-full w-1/2 bg-red-600 z-20 transition-transform ease-in-out duration-300 transform translate-x-0"
            >
              <ul className="flex flex-col items-center pt-20">
                <li className="mb-4">
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-white">
                    Categories
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-white">
                    A propos de nous
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-white">
                    Pourquoi KScientifique
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-white">
                    Contacts
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/admin" className="text-white">
                    Admin
                  </a>
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
            <a href="#" className="text-white hover:underline-red">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline-red">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline-red">
              A propos de nous
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline-red">
              Pourquoi KScientifique
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline-red">
              Contacts
            </a>
          </li>
          <li>
            <a href="/admin" className="text-white">
              Admin
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
