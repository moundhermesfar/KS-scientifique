import Categories from "./Categories";
import reasons from "../Data/reasons";
import Pourquoi from "./Pourquoi";
import Propos from "./Propos";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PreLoader from "../Components/PreLoader";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
    setLoading(true);
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://ks-scientifique-api.onrender.com/admin/categories/get-categories"
      );
      setCategories(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <>
      <PreLoader />
      <div className="flex flex-col justify-center items-stretch">
        <NavBar />
        <Header />
        <Categories categories={categories} loading={loading} />
        <Propos />
        <Pourquoi reasons={reasons} />
        <Footer />
      </div>
    </>
  );
}

export default Home;
