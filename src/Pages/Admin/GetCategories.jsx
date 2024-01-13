import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://ks-scientifique-api.onrender.com/admin/categories/get-categories"
      );
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = async (categoryId) => {
    setSelectedCategoryId(categoryId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `https://ks-scientifique-api.onrender.com/admin/categories/delete-category${selectedCategoryId}`
      );
      console.log(response.data);
      setShowDeleteModal(false);
      setSelectedCategoryId(null);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedCategoryId(null);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Categories List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category._id} className="bg-white p-6 rounded-lg shadow-md">
            <strong className="block text-2xl mb-4 text-gray-800">
              {category.name}
            </strong>
            {category.img && (
              <img
                src={`data:${category.img.contentType};base64,${category.img.data}`}
                alt={category.name}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
            )}
            <div className="flex justify-between">
              <Link
                to={`https://ks-scientifique-api.onrender.com/admin/categories/update-category/${category._id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                <FaEdit className="mr-2" /> Update
              </Link>
              <button
                onClick={() => handleDelete(category._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300"
              >
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add button to create a new category */}
      <div className="flex justify-center mt-10">
        <Link
          to="https://ks-scientifique-api.onrender.com/admin/categories/create-category"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all duration-300"
        >
          Create New Category
        </Link>
      </div>

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-xl mb-4 text-gray-800">
              Are you sure you want to delete this category?
            </p>
            <div className="flex justify-between">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300"
              >
                Confirm
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetCategories;
