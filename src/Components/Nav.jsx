import React, { useEffect, useState } from "react";
import logo from "../assets/logo-img.png";

const Nav = () => {
  const Links = [
    { name: "HOME", link: "##home" },
    { name: "CATEGORIES", link: "/##categories" },
    { name: "A PROPOS", link: "/##about" },
    { name: "POURQUOI KS", link: "/##why" },
    { name: "CONTACT", link: "/#contact" },
    { name: "ADMIN", link: "/#admin" },
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
    <div  className={open && "fixed inset-0 z-50 overflow-auto flex items-center justify-center bg-gray-800 bg-opacity-50"}>
      <nav id="nav" className="z-50 w-full fixed top-0 left-0 shadow-md">
        <div className="h-[70px] md:flex items-center justify-between bg-white md:px-10 px-7">
          <div className="flex items-center">
            <a href="##home" onClick={() => setOpen(false)}>
              <img
                className="w-[70px]"
                src={logo}
                alt="Your Descriptive Alt Text"
              />
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black"
            name={open ? "close" : "menu"}
          >
            {open ? "✖" : "☰"}
          </button>

          <ul
            className={`mr-[5%] md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-top duration-500 ease-in ${
open ? "top-[57px] bg-white shadow-lg" : "bg-white top-[-490px]"
}`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className={`md:ml-8 md:my-0 my-7 ${open && "ml-[28%]"}`}
              >
                <a
                  href={link.link}
                  className="text-black font-semibold hover:underline"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
