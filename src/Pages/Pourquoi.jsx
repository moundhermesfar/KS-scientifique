import ReasonCard from "../Components/reasonCard.jsx";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Pourquoi = ({ reasons }) => {
  return (
    <div
      id="#why"
      className="mb-20 mt-20 text-center flex flex-col items-center p-5"
    >
      <div>
        <h2 className="text-3xl font-semibold text-red-500 mb-5">
          Pourquoi KS scientifique
        </h2>
      </div>
      <hr className="mb-10 bg-black border-t border-red-500 w-1/2 mx-auto border-solid border-b-2" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {reasons.map((item) => (
          <ReasonCard key={item.id} reason={item} />
        ))}
      </div>
    </div>
  );
};

export default Pourquoi;
