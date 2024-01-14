import React, { useEffect, useState } from "react";
import labo1 from "../assets/labo1.jpg";
import labo2 from "../assets/labo2.jpg";
import labo3 from "../assets/labo3.jpg";

const Header = () => {
  const [currentImage, setCurrentImage] = useState(labo1);
  const images = [labo1, labo2, labo3];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <header className="flex-col overflow-hidden relative flex min-h-[1024px] w-full max-md:max-w-full z-10">
      <img
        loading="lazy"
        src={currentImage}
        className="blur absolute h-full w-full object-cover object-center inset-0 max-h-full"
        alt="Lab Image"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-white text-center text-4xl md:text-6xl lg:text-6xl max-md:text-4xl max-md:mt-10 shadow-lg">
          La brillance du laboratoire libérée
        </div>
        <div className="p-5 text-white text-center text-lg md:text-3xl leading-relaxed max-w-[748px] mt-10 max-md:max-w-full max-md:mt-5">
          Optimisez votre travail en laboratoire avec notre vente exclusive
          d'équipements et de consommables ! Découvrez des outils et fournitures
          de haute qualité pour des recherches de pointe. <br />
          Offres limitées sur des équipements essentiels. Améliorez votre
          expérience en laboratoire – faites vos achats maintenant !
        </div>
      </div>
    </header>
  );
};

export default Header;
