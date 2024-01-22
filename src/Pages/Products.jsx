import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import ProductDetails from "../Components/ProductDetails";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Spinner from "../Components/Spinner";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

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

  return (
    <>
      <NavBar />
      <div className="mt-10 text-center flex flex-col items-center">
        <motion.div variants={textVariant()}>
          <h2 className="mt-20 p-4 text-red-600 text-[32px] font-normal font-['DM Serif Display']">
            {category?.name}
          </h2>
        </motion.div>
        <hr className="bg-black border-t border-red-600 w-1/2 mx-auto border-solid border-b-2" />
        {loading ? (
          <Spinner />
        ) : filteredProducts.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => (
              <Product
                key={product._id}
                index={index}
                product={product}
                onClick={() => openProductDetails(product)}
              />
            ))}

            {selectedProduct && (
              <ProductDetails
                product={selectedProduct}
                onClose={closeProductDetails}
              />
            )}
          </div>
        ) : (
          <div className="mt-10 mb-[100px] text-gray-500">
            <span>Aucun produit dans cette catégorie pour le moment.</span>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
