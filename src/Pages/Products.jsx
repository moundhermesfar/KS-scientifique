import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Spinner from "../Components/Spinner";
import Nav from "../Components/Nav";
import Footer1 from "../Components/Footer1";
import SearchBar from "../Components/SearchBar";
import { ProductsList } from "../Components/ProductsList";

const Products = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `https://ks-scientifique-api.onrender.com/admin/categories/get-category/${id}`
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  useEffect(() => {
    setLoading(true);
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://ks-scientifique-api.onrender.com/admin/products/get-products`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsByCategory();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === category?.name
  );

  const handleSearch = (searchInput) => {
    const filtered = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResult(filtered);
  };

  return (
    <>
      <Nav />
      {filteredProducts.length && <SearchBar onSearch={handleSearch} />}
      <div className="mt-10 text-center flex flex-col items-center">
        <motion.div variants={textVariant()}>
          <h2
            style={{ color: "#139FFB" }}
            className="mt-5 p-4 text-[32px] font-normal font-['DM Serif Display']"
          >
            {category?.name}
          </h2>
        </motion.div>
        <hr className="bg-black border-t border-blue-300 w-1/2 mx-auto border-solid border-b-2" />
        {loading ? (
          <Spinner />
        ) : result.length ? (
          <ProductsList filteredProducts={result} />
        ) : filteredProducts.length ? (
          <ProductsList filteredProducts={filteredProducts} />
        ) : (
          <div className="mt-10 mb-[100px] text-gray-500">
            <span>Aucun produit dans cette catégorie pour le moment.</span>
          </div>
        )}
      </div>
      <Footer1 />
    </>
  );
};

export default Products;
