import Categories from "./Categories";
import reasons from "../Data/reasons";
import Pourquoi from "./Pourquoi";
import Propos from "./Propos";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ShuffleHero from "../Components/HeaderMotion";
import Nav from "../Components/Nav";
import Footer1 from "../Components/Footer1";

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
      <div className="flex flex-col justify-center items-stretch">
        <Nav />
        <ShuffleHero />
        <Categories categories={categories} loading={loading} />
        <Propos />
        <Pourquoi reasons={reasons} />
        <Footer1 />
      </div>
    </>
  );
}

export default Home;
