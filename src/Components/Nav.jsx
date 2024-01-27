import React, { useEffect, useState } from "react";
import logo from "../assets/logo-img.png";

const Nav = () => {
  const Links = [
    { name: "Home", link: "##home" },
    { name: "Categories", link: "/##categories" },
    { name: "A propos de KS", link: "/##about" },
    { name: "Pourquoi KS", link: "/##why" },
    { name: "Contact", link: "/#contact" },
    { name: "Admin", link: "/#admin" },
  ];
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (open) {
        const menuContainer = document.getElementById("nav");
        if (menuContainer && !menuContainer.contains(event.target)) {
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleClickOutsideMenu);
  }, [open]);

  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav id="nav" className="z-50 shadow-md w-full fixed top-0 left-0">
      <div className="h-[70px] md:flex items-center justify-between bg-blue-500 py-4 md:px-10 px-7">
        <a href="##home" onClick={() => setOpen(false)}>
          <img
            className="w-[75px]"
            src={logo}
            alt="Your Descriptive Alt Text"
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
          name={open ? "close" : "menu"}
        >
          {open ? "✖" : "☰"}
        </button>

        <ul
          className={`mr-[5%] md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-top duration-500 ease-in ${
            open ? "top-[57px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <a
                href={link.link}
                className="text-white hover:text-gray-300 hover:underline"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
