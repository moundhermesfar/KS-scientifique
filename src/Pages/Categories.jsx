import React from "react";
import Category from "../Components/Category";
import { Link } from "react-router-dom";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Categories = ({ categories }) => {
  return (
    <div
      id="#categories"
      className="mb-20 text-center flex flex-col items-center"
    >
      <motion.div variants={textVariant()}>
        <h2 className="mt-20 p-4 text-red-500 text-[32px] font-normal font-['DM Serif Display']">
          Catégories
        </h2>
      </motion.div>
      <hr className="bg-black border-t border-red-400 w-1/2 mx-auto border-solid border-b-2" />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link to={`/products/${category._id}`} key={category._id}>
            <Category key={category._id} index={index} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
