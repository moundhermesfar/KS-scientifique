import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const ReasonCard = ({ reason }) => {
  return (
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="p-3 max-h-[500px] h-[450px] bg-white rounded-[50px] px-4 py-2 m-4 relative text-center shadow-[3px_5px_5px_3px_#ff000040]">
        <div className="mb-2 mx-auto">
          <img
            src={reason.pic}
            className="rounded-full mt-[5%] mb-[12%] w-24 h-24 object-cover mx-auto"
          />
        </div>
        <div className="mb-2">
          <h2 className="font-bold">{reason.title}</h2>
        </div>
        <div className="align-block align-middle flex items-center">
          <p className="align-block align-middle max-h-[350px]">{reason.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ReasonCard;
