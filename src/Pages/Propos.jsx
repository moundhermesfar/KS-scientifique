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
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="url(#wave-gradient)"
            fillOpacity="0.20"
            d="M0,160L40,149.3C80,139,160,117,240,106.7C320,96,400,96,480,101.3C560,107,640,117,720,128C800,139,880,149,960,133.3C1040,117,1120,75,1200,58.7C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
          <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
            <stop
              offset="0%"
              style={{ stopColor: "#0099ff", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#0099ff", stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "transparent", stopOpacity: 0 }}
            />
          </linearGradient>
        </svg>
        <section id="#about" className="flex flex-col bg-white">
          <div className="text-center p-5">
            <h2 className="text-4xl font-semibold text-black mb-5">
              A propos<span style={{ color: "#139FFB" }}> de nous</span>
            </h2>
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
        <div className="bg-gradient-to-t from-blue-200 via-blue-100 to-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,160C840,139,960,117,1080,128C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </>
    );
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="url(#wave-gradient)"
          fillOpacity="0.1"
          d="M0,224L60,213.3C120,203,240,181,360,160C480,139,600,117,720,128C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
        <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
          <stop offset="0%" style={{ stopColor: "#0099ff", stopOpacity: 1 }} />
          <stop
            offset="50%"
            style={{ stopColor: "#0099ff", stopOpacity: 0.5 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "transparent", stopOpacity: 0 }}
          />
        </linearGradient>
      </svg>
      <section
        id="#about"
        className="h-[650px] flex flex-row bg-white relative overflow-hidden"
      >
        <div className="text-left flex flex-col justify-center max-w-[599px] mx-auto text-black z-10">
          <h2 className="text-black text-5xl font-semibold mb-10">
            A propos <span style={{ color: "#139FFB" }}>de nous</span>
          </h2>
          <p className="text-black text-4xl lg:text-xl">
            Bienvenue chez <strong>KS Scientifique</strong>, votre partenaire
            pour l'excellence en laboratoire. Passionnés d'innovation
            scientifique, nous offrons des équipements et consommables de
            qualité supérieure. Avec des offres exclusives,{" "}
            <strong>KS Scientifique</strong> élève chaque expérience en
            laboratoire. Rejoignez-nous pour découvrir l'excellence
            scientifique!
          </p>
        </div>
        <div className="w-2/5 z-10">
          <ParticleRing isMobile={false} />
        </div>
      </section>
      <div className="bg-gradient-to-t from-blue-100 to-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,160C840,139,960,117,1080,128C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Propos;
