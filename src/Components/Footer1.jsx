import React from "react";
import logo from "../assets/logo-img.png";
import { FaFacebookSquare, FaEnvelope, FaInstagram } from "react-icons/fa";
// Reusable SocialIcon component with hover effect
const SocialIcon = ({ icon: Icon }) => (
  <Icon
    className="social-icon hover:text-[#5abef3] hover:cursor-pointer"
    size={30}
  />
);
// Footer component
const Footer1 = () => {
  // Array defining the content and structure of the footer
  const items = [
    // Social media icons
    { type: "icon", icon: FaFacebookSquare },
    { type: "icon", icon: FaEnvelope },
    { type: 'icon', icon: FaInstagram },
    // Footer sections
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
  // JSX structure of the footer
  return (
    <div className="lg:pr-[65px] lg:pl-10 pr-10 bg-[#141a63] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-10 text-gray-300">
      {/* Left section with brand and social icons */}
      <div>
        <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500">
          <span className="text-red-500">KS </span>Scientifique
        </h1>
        <p className="py-4">
          Éveillant la curiosité, stimulant la découverte. Nous sommes une
          source d'innovation, démêlant les mystères de la science avec passion
          et précision. Rejoignez-nous pour façonner l'avenir de l'exploration
          et du savoir.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          {/* Mapping over social icons and rendering the SocialIcon component */}
          {items.map((item, index) =>
            item.type === "icon" ? (
              <SocialIcon key={index} icon={item.icon} />
            ) : null
          )}
        </div>
      </div>
      {/* Right section with footer content organized in sections */}
      <div className="lg:col-span-1 flex justify-between mt-6">
        {/* Mapping over sections and rendering content */}
        {items.map((item, index) =>
          item.title === "Entreprise" ? (
            <div key={index}>
              <h6 className="font-medium py-3 text-gray-100 text-xl">
                {item.title}
              </h6>
              <ul>
                {/* Mapping over items in each section */}
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-2 text-sm">
                    <a href={`${subItem.link}`}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : item.title === "Appele-nous" ? (
            <div key={index}>
              <h6 className="font-medium py-3 text-gray-100 text-xl">
                {item.title}
              </h6>
              <ul>
                {/* Mapping over items in each section */}
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-2 text-sm">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
      <div className="lg:col-span-1 flex justify-center items-center">
        <img src={logo} alt="KS" />
      </div>
    </div>
  );
};
export default Footer1;
