import React, { useEffect, useState } from "react";
import ParticleRing from "../Components/ParticleRing";

const Propos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <section id="#about" className="pt-10 mt-10 mb-10 flex flex-col bg-white">
        <div className="text-center p-5">
          <h2 className="text-4xl font-semibold text-black mb-5">
            <span className="text-blue-700">A propos</span> de nous
          </h2>
          {/* <hr className="mb-3 bg-black border-t border-white w-3/4 mx-auto border-solid border-b-2" /> */}
          <p className="text-lg text-black max-w-full mx-auto">
            Bienvenue chez KS scientifique, votre partenaire pour l'excellence
            en laboratoire. Passionnés d'innovation scientifique, nous offrons
            des équipements et consommables de qualité supérieure. Avec des
            offres exclusives, KS scientifique élève chaque expérience en
            laboratoire. Rejoignez-nous pour découvrir l'excellence
            scientifique!
          </p>
        </div>
        <div className="mx-auto mt-5 w-[100%]">
          <ParticleRing isMobile={true} />
        </div>
      </section>
    );
  }

  return (
    <section
      id="#about"
      className="h-[650px] mt-20 mb-20 flex flex-row  bg-white"
    >
      <div className="text-left flex flex-col justify-center max-w-[599px] mx-auto text-black">
        <h2 className="text-black text-5xl font-semibold mb-10">
          <span className="text-blue-700">A propos</span> de nous
        </h2>
        {/* <hr className="mr-[95%] mb-5 bg-black border-t border-white w-[60%] mx-auto border-solid border-b-2" /> */}
        <p className="text-gray-600 text-4xl lg:text-xl">
          Bienvenue chez <strong>KS Scientifique</strong>, votre partenaire pour
          l'excellence en laboratoire. Passionnés d'innovation scientifique,
          nous offrons des équipements et consommables de qualité supérieure.
          Avec des offres exclusives, <strong>KS Scientifique</strong> élève
          chaque expérience en laboratoire. Rejoignez-nous pour découvrir
          l'excellence scientifique!
        </p>
      </div>
      <div className="w-2/5">
        <ParticleRing isMobile={false} />
      </div>
    </section>
  );
};

export default Propos;
