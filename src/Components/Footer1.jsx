import React from "react";
import { useSnackbar } from "notistack";
import { FaFacebookSquare, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo-img.png";

const SocialIcon = ({ icon: Icon }) => (
  <Icon
    className="mx-[auto] social-icon text-white hover:text-blue-700 hover:cursor-pointer"
    size={30}
  />
);
const Footer1 = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopyToClipboard = (address) => {
    navigator.clipboard.writeText(address);
    enqueueSnackbar("Adresse copiée", { variant: "default" });
  };

  const items = [
    { type: "icon", icon: FaFacebookSquare },
    { type: "icon", icon: FaEnvelope, address: "boudiafsamira514@gmail.com" },
    {
      type: "section",
      title: "Appele-nous",
      items: ["0540 30 54 96", "0770 91 52 94", "0793 09 99 40"],
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
    <div className="bg-[#139FFB]">
      <div className="w-full lg:pr-[65px] lg:pl-10 pr-10 bg-[#139FFB] mx-auto py-11 px-5 grid lg:grid-cols-2 gap-10 text-gray-300">
        <div className="md:mx-[10%]">
          <div className="mb-5 lg:col-span-custom flex w-full items-center">
            <img src={logo} alt="KS" />
          </div>
          <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            KS Scientifique
          </h1>
          <p className="text-white text-xl font-semibold py-4">
            votre partenaire pour l'excellence en laboratoire.
          </p>
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
                    <li
                      key={subIndex}
                      className="text-white hover:underline font-semibold py-2 text-sm"
                    >
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
                    <li
                      key={subIndex}
                      className="text-white font-semibold py-2 text-sm"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      </div>
      <hr className="mx-[auto] w-[90%] text-white border-[2px] border-white" />
      <div className="py-5 mx-auto flex justify-between md:w-[75%] relative">
        {items.map((item, index) =>
          item.type === "icon" ? (
            item.icon === FaFacebookSquare ? (
              <a
                className="mx-auto"
                href="https://www.facebook.com/profile.php?id=100050354096175"
                target="_blank"
              >
                <SocialIcon key={index} icon={item.icon} />
              </a>
            ) : (
              <div
                key={index}
                onClick={() => handleCopyToClipboard(item.address)}
                className="mx-auto"
              >
                <SocialIcon icon={item.icon} />
              </div>
            )
          ) : null
        )}
      </div>
    </div>
  );
};
export default Footer1;
