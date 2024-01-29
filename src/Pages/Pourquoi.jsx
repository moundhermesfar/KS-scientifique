import ReasonCard from "../Components/reasonCard.jsx";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Pourquoi = ({ reasons }) => {
  return (
    <div
      id="#why"
      className="mb-20 mt-20 text-center flex flex-col items-center p-5"
    >
      <div className="mb-10">
        <h2 className="text-5xl font-semibold text-black mb-5">
          <span className="text-blue-700">Pourquoi</span> KS scientifique
        </h2>
      </div>
      {/* <hr className="mb-10 bg-black border-t border-black w-1/2 mx-auto border-solid border-b-2" /> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {reasons.map((item) => (
          <ReasonCard key={item.id} reason={item} />
        ))}
      </div>
    </div>
  );
};

export default Pourquoi;
