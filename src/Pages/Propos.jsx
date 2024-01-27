import React, { useEffect, useState } from "react";
import propos from "../assets/propos.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleRing from "../Components/ParticleRing";

const Propos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
      <section
        id="about"
        className="pt-10 mt-10 mb-10 flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500"
        data-aos="fade-right"
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
        <div className="mx-auto mt-5  w-[100%]">
          {/* <img src={propos} className="w-full h-auto" alt="A propos" /> */}
          <ParticleRing isMobile={true} />
        </div>
      </section>
    );
  }

  return (
    <section
      id="#about"
      className="h-[650px] mt-20 mb-20 flex flex-row bg-gradient-to-r from-blue-900 via-blue-700 to-blue-700"
      data-aos="fade-right"
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
      <div className="w-2/5">
        {/* <img src={propos} className="w-[650px] h-[650px]" alt="A propos" /> */}
        <ParticleRing isMobile={false} />
      </div>
    </section>
  );
};

export default Propos;
