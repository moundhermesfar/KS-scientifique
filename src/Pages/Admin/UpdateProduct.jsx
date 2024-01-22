import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";

const UpdateProduct = () => {
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [file, setFile] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductDetails();
    fetchCategories();
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
      setSelectedCategory(response.data.category);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

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

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("category", selectedCategory);

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
      navigate("/admin/products/get-products", { state: { auth: true } });
      console.log(response.data);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Something went wrong, Please try again");
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
    <>
      <BackButton destination={"/admin/products/get-products"} />
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Update Product
          </h2>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
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
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer w-full"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
