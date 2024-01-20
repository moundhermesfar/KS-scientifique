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
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="mb-20 rounded-lg p-5 m-4 relative text-center hover:shadow-xl"
          onClick={onClick}
        >
          <div className="bg-blue-400 shadow-md flex items-center justify-center rounded-lg">
            <img
              src={`data:${product.img.contentType};base64,${product.img.data}`}
              alt={name}
              className="object-cover w-48 h-48 m-4"
            />
          </div>
          <p className="mt-4 text-red-500 font-semibold text-lg">{name}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Product;
