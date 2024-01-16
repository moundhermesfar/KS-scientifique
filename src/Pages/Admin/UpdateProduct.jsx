import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [file, setFile] = useState("");
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://ks-scientifique-api.onrender.com/admin/products/get-product/${id}`
      );
      setProductDetails(response.data);
      setProductName(response.data.name);
      setProductDescription(response.data.description);
      setProductPrice(response.data.price);
      setProductCategory(response.data.category);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("category", productCategory);

    if (file) {
      const base64String = await fileToBase64(file);
      formData.append("img", base64String);
    }

    try {
      const response = await axios.put(
        `https://ks-scientifique-api.onrender.com/admin/products/update-product/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Update Product
        </h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />
        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        ></textarea>
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Product Category"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />
        <Link to="/admin/products/get-products">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer w-full"
          >
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateProduct;
