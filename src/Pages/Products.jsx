import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import ProductDetails from "../Components/ProductDetails";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/categories/get-category/${id}`
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/products/get-products`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsByCategory();
  }, []);

  // Filter products based on the category name
  const filteredProducts = products.filter(
    (product) => product.category === category?.name
  );

  // Display products in the UI
  return (
    <>
      <NavBar />
      <div className="mt-10 text-center flex flex-col items-center">
        <h2 className="mt-20 p-4 text-red-600 text-[32px] font-normal font-['DM Serif Display']">
          {category?.name}
        </h2>
        <hr className="bg-black border-t border-red-600 w-1/2 mx-auto border-solid border-b-2" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Product
              key={product._id}
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
      </div>
      <Footer />
    </>
  );
};

export default Products;
