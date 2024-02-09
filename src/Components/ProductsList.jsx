import React, { useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

export const ProductsList = ({ filteredProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };
  return (
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
  );
};
