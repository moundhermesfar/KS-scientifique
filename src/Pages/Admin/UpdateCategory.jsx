import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";

const UpdateCategory = () => {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState("");
  const [categoryDetails, setCategoryDetails] = useState(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchCategoryDetails();
  }, []);

  const fetchCategoryDetails = async () => {
    try {
      const response = await axios.get(
        `https://ks-scientifique-api.onrender.com/admin/categories/get-category/${id}`
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
        `https://ks-scientifique-api.onrender.com/admin/categories/update-category/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/admin/categories/get-categories", { state: { auth: true } });
      enqueueSnackbar("Catégorie mise à jour avec succès", {
        variant: "success",
      });
    } catch (error) {
      console.log("errore updating category", error);
      enqueueSnackbar("Quelque chose s'est mal passé, veuillez réessayer.", {
        variant: "error",
      });
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
      <BackButton destination={"/admin/categories/get-categories"} />
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
    </>
  );
};

export default UpdateCategory;
