import React, { useEffect, useRef } from "react";
import { Carousel } from "./Carousel";

const ProductDetails = ({ product, onClose }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  document.body.style.overflow = "hidden";

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div
        ref={modalRef}
        className="m-[20px] relative w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-[40px] shadow-lg p-4 flex flex-col md:flex-row"
        style={{ animation: "dropTop .3s linear", background: "#E9F0FF" }}
      >
        <div className="w-full mb-2 md:mb-0">
          <Carousel product={product} />
        </div>
        <div className="my-auto p-4 md:p-8 w-full md:w-1/2 text-center">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mt-2 mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Description:</span>
            {product.description}
          </p>
          <p className="text-green-600 font-semibold mb-2">
            <span className="font-semibold">Prix:</span> {product.price} DZ
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
