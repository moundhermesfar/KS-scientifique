import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h1>
        <div className="flex flex-col space-y-4">
          <Link to={"/admin/categories/get-categories"}>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none">
              Manage Categories
            </button>
          </Link>
          <Link to={"/admin/products/get-products"}>
            <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 focus:outline-none">
              Manage Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
