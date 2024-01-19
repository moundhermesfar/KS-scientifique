import React, { useEffect, useState } from "react";
import propos from "../assets/propos.jpg";

const Propos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <section
        id="about"
        className="pt-10 mt-10 mb-10 flex flex-col bg-gradient-to-r from-blue-800 via-blue-600 to-blue-200"
      >
        <div className="text-center p-5">
          <h2 className="text-3xl font-semibold text-white mb-3">
            A propos de nous
          </h2>
          <hr className="mb-3 bg-black border-t border-white w-3/4 mx-auto border-solid border-b-2" />
          <p className="text-lg text-white max-w-full mx-auto">
            Bienvenue chez KS scientifique, votre partenaire pour l'excellence
            en laboratoire. Passionnés d'innovation scientifique, nous offrons
            des équipements et consommables de qualité supérieure. Avec des
            offres exclusives, KS scientifique élève chaque expérience en
            laboratoire. Rejoignez-nous pour découvrir l'excellence
            scientifique!
          </p>
        </div>
        <div className="mx-auto mt-5">
          <img src={propos} className="w-full h-auto" alt="A propos" />
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="h-[650px] mt-20 mb-20 flex flex-row bg-gradient-to-r from-blue-800 via-blue-400 to-blue-200"
    >
      <div className="text-left flex flex-col justify-center max-w-[599px] mx-auto text-white">
        <h2 className="text-4xl font-semibold mb-5">A propos de nous</h2>
        <hr className="mr-[95%] mb-5 bg-black border-t border-white w-[60%] mx-auto border-solid border-b-2" />
        <p className="text-lg lg:text-xl">
          Bienvenue chez <strong>KS Scientifique</strong>, votre partenaire pour
          l'excellence en laboratoire. Passionnés d'innovation scientifique,
          nous offrons des équipements et consommables de qualité supérieure.
          Avec des offres exclusives, <strong>KS Scientifique</strong> élève
          chaque expérience en laboratoire. Rejoignez-nous pour découvrir
          l'excellence scientifique!
        </p>
      </div>
      <div className="ml-auto">
        <img src={propos} className="w-[650px] h-[650px]" alt="A propos" />
      </div>
    </section>
  );
};

export default Propos;
