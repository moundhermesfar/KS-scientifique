import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const ReasonCard = ({ reason, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white border-2 border-red-400 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl text-center shadow-red"
        >
          <div className="mb-2 mx-auto">
            <img
              src={reason.pic}
              className="rounded-full w-24 h-24 object-cover mx-auto"
            />
          </div>
          <div className="mb-2">
            <h2 className="font-bold">{reason.title}</h2>
          </div>
          <div>
            <p>{reason.paragraph}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ReasonCard;
