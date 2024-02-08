import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import BackButton from "../../Components/BackButton";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const auth = location.state?.auth || false;

  useEffect(() => {
    if (!auth) {
      navigate("/admin/login");
    }
  }, [auth, navigate]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://ks-scientifique-api.onrender.com/admin/categories/get-categories"
        );
        setCategories(response.data.data);
        enqueueSnackbar("Produit créé avec succès.", { variant: "success" });
      } catch (error) {
        console.error("Error fetching categories:", error);
        enqueueSnackbar("Quelque chose s'est mal passé, veuillez réessayer.", {
          variant: "error",
        });
      }
    };

    fetchCategories();
  }, []);

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append("category", selectedCategory);
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("description", productDescription);

    if (file1 && file2 && file3) {
      const base64String1 = await fileToBase64(file1);
      const base64String2 = await fileToBase64(file2);
      const base64String3 = await fileToBase64(file3);
      formData.append("img1", base64String1);
      formData.append("img2", base64String2);
      formData.append("img3", base64String3);
    }

    try {
      const response = await axios.post(
        "https://ks-scientifique-api.onrender.com/admin/products/create-product",
        formData
      );
      console.log(response.data);
      navigate("/admin/products/get-products", { state: { auth: true } });
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again");
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
            Create Product
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
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <textarea
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="file"
            onChange={(e) => setFile1(e.target.files[0])}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="file"
            onChange={(e) => setFile2(e.target.files[0])}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="file"
            onChange={(e) => setFile3(e.target.files[0])}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <button
            onClick={handleCreate}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer w-full"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
