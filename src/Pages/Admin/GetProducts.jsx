import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    // Fetch products based on categoryId
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ks-scientifique-api.onrender.com/admin/products/get-products"
        );

        // Assuming the structure of your response is { count: number, data: array }
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    setSelectedProductId(productId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `https://ks-scientifique-api.onrender.com/admin/products/delete-product/${selectedProductId}`
      );
      console.log(response.data);
      setShowDeleteModal(false);
      setSelectedProductId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedProductId(null);
  };

  return (
    <div className="container mx-auto my-8 items-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">Products List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <li key={product._id} className="bg-white p-4 rounded-lg shadow">
            <strong className="block text-xl mb-2">{product.name}</strong>
            <h4 className="block text-xl mb-2">{product.category}</h4>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2">{product.price}</p>
            {product.img && (
              <img
                src={`data:${product.img.contentType};base64,${product.img.data}`}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded-md"
              />
            )}
            <div className="flex justify-between items-center">
              <Link
                to={`/admin/update-product/${product._id}`}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
              >
                <FaEdit className="mr-2" /> Update
              </Link>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 cursor-pointer"
              >
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add button to create a new product */}
      <div className="flex justify-center mt-20">
        <Link
          to="https://ks-scientifique-api.onrender.com/admin/products/create-product"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 cursor-pointer"
        >
          Create New Product
        </Link>
      </div>

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-xl mb-4">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-between">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 cursor-pointer"
              >
                Confirm
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 p-2 rounded-md hover:bg-gray-400 cursor-pointer"
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

export default GetProducts;
