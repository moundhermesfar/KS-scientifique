import React from "react";

const Category = ({ category }) => {
  const { name, imageUrl } = category;

  return (
    <div className="rounded-lg p-5 m-4 relative text-center hover:shadow-xl ">
      <div className="bg-indigo-50 shadow-md flex items-center justify-center rounded-lg">
        <img
          src={`data:${category.img.contentType};base64,${category.img.data}`}
          alt={name}
          className="object-cover w-48 h-48 m-4"
        />
      </div>
      <p className="mt-4 text-red-500 font-semibold text-lg">{name}</p>
    </div>
  );
};

export default Category;
