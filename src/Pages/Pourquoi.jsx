import { useEffect, useState } from "react";
import ReasonCard from "../Components/reasonCard.jsx";

const Pourquoi = ({ reasons }) => {
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

  return (
    <div
      id="#why"
      className="mb-20 mt-20 text-center flex flex-col items-center p-5"
    >
      <div className="mb-10">
        <h2
          className={
            isMobile
              ? "text-4xl font-semibold text-black mb-5"
              : "text-5xl font-semibold text-black mb-5"
          }
        >
          Pourquoi <span style={{ color: "#139FFB" }}>KS scientifique</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {reasons.map((item) => (
          <ReasonCard key={item.id} reason={item} />
        ))}
      </div>
    </div>
  );
};

export default Pourquoi;
