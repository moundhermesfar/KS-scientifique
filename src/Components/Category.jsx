import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Category = ({ category, index }) => {
  const { name, imageUrl } = category;

  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          style={{ background: "#E9F0FF" }}
          className="p-5 m-5 md:w-[320px] h-[250px] shadow-lg flex items-center justify-center rounded-[40px] md:rounded-[40px]"
        >
          <img
            src={`data:${category.img.contentType};base64,${category.img.data}`}
            alt={name}
            className="object-cover w-full h-full md:w-[180px] md:h-[180px]"
          />
        </div>
        <p
          style={{ color: "#139FFB" }}
          className="mt-4 font-semibold text-lg text-center"
        >
          {name}
        </p>
      </motion.div>
    </Tilt>
  );
};

export default Category;
