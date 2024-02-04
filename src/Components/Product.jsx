import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Product = ({ product, index, onClick }) => {
  const { name } = product;

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="mb-10 mt-10 w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          style={{ background: "#E9F0FF" }}
          className="p-5 m-5 md:w-[320px] h-[250px] shadow-md flex items-center justify-center rounded-[40px]"
          onClick={onClick}
        >
          <img
            src={`data:${product.img.contentType};base64,${product.img.data}`}
            alt={name}
            className="rounded-[40px] object-cover w-full h-full md:w-[180px] md:h-[180px]"
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

export default Product;
