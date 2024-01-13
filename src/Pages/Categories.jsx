import React from "react";
import Category from "../Components/Category";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div id="categories" className="mb-20 text-center flex flex-col items-center">
      <h2 className="mt-20 p-4 text-red-600 text-[32px] font-normal font-['DM Serif Display']">
        Catégories
      </h2>
      <hr className="bg-black border-t border-red-600 w-1/2 mx-auto border-solid border-b-2" />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            to={`/products/${category._id}`}
            key={category._id}
          >
            <Category key={category._id} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
