import { useEffect, useState } from "react";
import ReasonCard from "../Components/reasonCard.jsx";

const Pourquoi = ({ reasons }) => {
  const svgBackground1 = `
  url("data:image/svg+xml,${encodeURIComponent(
    '<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#0049CD"></rect><g transform="translate(507.4572186374483 295.8745457005562)"><path d="M182 -287.7C214.1 -296.8 203.2 -203.9 192.2 -139C181.2 -74 170.1 -37 191.3 12.2C212.5 61.5 266 123 255 149.7C243.9 176.4 168.2 168.3 114.9 193.2C61.7 218.1 30.8 276.1 -9.1 291.8C-49 307.5 -98 281.1 -160.1 261.2C-222.1 241.4 -297.3 228.2 -335.8 185.8C-374.3 143.3 -376.1 71.7 -366.5 5.6C-356.8 -60.5 -335.6 -121 -283 -139C-230.4 -157.1 -146.5 -132.7 -94.1 -111.8C-41.7 -90.9 -20.8 -73.6 27.1 -120.5C75 -167.4 150 -278.6 182 -287.7" fill="#4FACF7"></path></g></svg>'
  )}")
  center / cover no-repeat`;

  const svgBackground2 = `
  url("data:image/svg+xml,${encodeURIComponent(
    '<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#0049CD"></rect><g transform="translate(517.083472267561 348.94964077837784)"><path d="M94.4 -181.4C115.5 -151.4 121 -112.2 128.1 -80.4C135.3 -48.7 144.1 -24.3 167 13.2C189.8 50.7 226.5 101.3 219.2 132.8C211.8 164.3 160.4 176.5 116.5 196.5C72.7 216.5 36.3 244.3 8 230.4C-20.3 216.6 -40.7 161.1 -48.8 120.5C-56.9 79.8 -52.8 54 -113.8 36.4C-174.8 18.8 -300.9 9.4 -339.8 -22.5C-378.8 -54.3 -330.5 -108.7 -296.9 -173.6C-263.2 -238.6 -244.1 -314.1 -197.1 -329.1C-150 -344.1 -75 -298.6 -19.2 -265.4C36.7 -232.2 73.3 -211.4 94.4 -181.4" fill="#4FACF7"></path></g></svg>'
  )}")
  center / cover no-repeat`;

  const svgBackground3 = `
  url("data:image/svg+xml,${encodeURIComponent(
    '<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#0049CD"></rect><g transform="translate(420.8916513797147 169.862480041002)"><path d="M53.4 -96.3C64.8 -85.9 66.6 -62.7 129.6 -44.5C192.6 -26.3 316.8 -13.2 347.5 17.7C378.3 48.7 315.6 97.3 258 124.9C200.4 152.5 148 158.9 105.8 202.9C63.7 246.9 31.8 328.5 -21.6 365.9C-75 403.2 -150 396.5 -209.2 362.3C-268.4 328.1 -311.7 266.6 -293 201.6C-274.4 136.7 -193.7 68.3 -187.2 3.8C-180.7 -60.8 -248.4 -121.7 -234.3 -129.8C-220.1 -137.9 -124.1 -93.3 -71.4 -79.9C-18.8 -66.5 -9.4 -84.2 5.8 -94.3C21 -104.4 42 -106.7 53.4 -96.3" fill="#4FACF7"></path></g></svg>'
  )}")
  center / cover no-repeat`;

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
          <span className="text-blue-700">Pourquoi</span> KS scientifique
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {reasons.map((item) => (
          <ReasonCard
            key={item.id}
            svgBackground={
              item.id === 1
                ? svgBackground1
                : item.id === 2
                ? svgBackground2
                : svgBackground3
            }
            reason={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Pourquoi;
