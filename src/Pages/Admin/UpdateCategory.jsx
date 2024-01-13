import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState("");
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    fetchCategoryDetails();
  }, []);

  const fetchCategoryDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/admin/get-category/${id}`
      );
      setCategoryDetails(response.data);
      setCategoryName(response.data.name);
    } catch (error) {
      console.error("Error fetching category details:", error);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", categoryName);

    if (file) {
      const base64String = await fileToBase64(file);
      formData.append("img", base64String);
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/admin/update-category/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating category:", error);
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
          Update Category
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
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer w-full"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateCategory;
