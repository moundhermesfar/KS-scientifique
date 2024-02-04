import React from "react";
import { FaFacebookSquare, FaEnvelope, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo-img.png";

const SocialIcon = ({ icon: Icon }) => (
  <Icon
    className="social-icon text-white hover:text-blue-500 hover:cursor-pointer"
    size={30}
  />
);
const Footer1 = () => {
  const items = [
    { type: "icon", icon: FaFacebookSquare },
    { type: "icon", icon: FaEnvelope },
    { type: "icon", icon: FaInstagram },
    {
      type: "section",
      title: "Appele-nous",
      items: ["0540 30 54 96", "0540 30 54 96", "0540 30 54 96"],
    },
    {
      type: "section",
      title: "Entreprise",
      items: [
        { title: "A propos", link: "/##about" },
        { title: "Pourquoi", link: "/##why" },
        { title: "Categories", link: "/##categories" },
        { title: "Contactez-nous", link: "/#contact" },
      ],
    },
  ];
  return (
    <div className="w-full lg:pr-[65px] lg:pl-10 pr-10 bg-[#139FFB] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-10 text-gray-300">
      <div>
        <div className="lg:col-span-custom flex w-full items-center">
          <img src={logo} alt="KS" />
        </div>
        <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          KS Scientifique
        </h1>
        <p className="text-white text-xl font-semibold py-4">
          votre partenaire pour l'excellence en laboratoire.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          {items.map((item, index) =>
            item.type === "icon" ? (
              <SocialIcon key={index} icon={item.icon} />
            ) : null
          )}
        </div>
      </div>
      <div className="lg:col-span-1 flex mt-[auto]">
        {items.map((item, index) =>
          item.title === "Entreprise" ? (
            <div className="mx-[auto]" key={index}>
              <h6 className="font-bold py-3 text-white text-2xl">
                {item.title}
              </h6>
              <ul>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-white font-semibold py-2 text-sm">
                    <a href={`${subItem.link}`}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : item.title === "Appele-nous" ? (
            <div className="mx-[auto]" key={index}>
              <h6 className="font-bold py-3 text-white text-2xl">
                {item.title}
              </h6>
              <ul>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-white font-semibold py-2 text-sm">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
export default Footer1;
