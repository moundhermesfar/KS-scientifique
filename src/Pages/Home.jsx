import Categories from "./Categories";
import reasons from "../Data/reasons";
import Pourquoi from "./Pourquoi";
import Propos from "./Propos";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [categories, setCategories] = useState([]);
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

  return (
    <div className="bg-white flex flex-col justify-center items-stretch">
      <NavBar />
      <Header />
      <Categories categories={categories} />
      <Propos />
      <Pourquoi reasons={reasons} />
      <Footer />
    </div>
  );
}

export default Home;
