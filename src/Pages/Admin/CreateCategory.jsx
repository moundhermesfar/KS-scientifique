import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("name", categoryName);

    if (file) {
      const base64String = await fileToBase64(file);
      formData.append("img", base64String);
    }

    try {
      const response = await axios.post(
        "https://ks-scientifique-api.onrender.com/admin/categories/create-category",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
          Create Category
        </h2>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />
        <Link to="/admin/categories/get-categories">
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer w-full"
          >
            Upload
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateCategory;
