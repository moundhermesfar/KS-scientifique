import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../../Components/BackButton";

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = location.state?.auth || false;

  useEffect(() => {
    if (!auth) {
      navigate("/admin/login");
    }
  }, [auth, navigate]);

  const handleClickCategories = (e) => {
    e.preventDefault();
    navigate("/admin/categories/get-categories", { state: { auth: true } });
  };

  const handleClickProducts = (e) => {
    e.preventDefault();
    navigate("/admin/products/get-products", { state: { auth: true } });
  };

  return (
    <>
      <BackButton destination={"/"} />
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Admin Dashboard
          </h1>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleClickCategories}
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Manage Categories
            </button>

            <button
              onClick={handleClickProducts}
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 focus:outline-none"
            >
              Manage Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
