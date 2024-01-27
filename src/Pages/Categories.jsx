import React from "react";
import Category from "../Components/Category";
import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Spinner from "../Components/Spinner";

const Categories = ({ categories, loading }) => {
  return (
    <div
      id="#categories"
      className="mb-20 text-center flex flex-col items-center"
    >
      <motion.div variants={textVariant()}>
        <h2 className="text-3xl font-semibold mt-20 p-4 text-red-500 text-[32px]">
          Catégories
        </h2>
      </motion.div>
      <hr className="bg-black border-t border-red-500 w-1/2 mx-auto border-solid border-b-2" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px]">
          {categories.map((category, index) => (
            <Link to={`/products/${category._id}`} key={category._id}>
              <Category key={category._id} index={index} category={category} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
