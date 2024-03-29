import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReasonCard = ({ reason }) => {
  const { ref: myRef, inView: isVisibale } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={myRef}
      variants={slideIn("left", "tween", 0, 0.5)}
      initial="hidden"
      animate={isVisibale ? "show" : ""}
      className="max-h-[500px] h-[450px] bg-white  to-transparent rounded-[50px] px-3 py-auto m-4 relative text-center shadow-[3px_5px_5px_3px_#7EC8FF]"
    >
      <div className="mb-2 mx-auto">
        <img
          src={reason.pic}
          className="rounded-full mt-[5%] mb-[9%] w-24 h-24 object-cover mx-auto"
        />
      </div>
      <div className="mb-1">
        <h2 className="text-xl font-bold">{reason.title}</h2>
      </div>
      <div className="align-block align-middle flex items-center">
        <p className="align-block mb-3 mt-2 align-middle max-h-[350px]">
          {reason.paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default ReasonCard;
