import React from "react";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="m-5 relative bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg p-8 flex">
        <div className="w-1/2">
          <img
            src={`data:${product.img.contentType};base64,${product.img.data}`}
            alt={product.name}
            className="w-full h-30 object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 ml-4">
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
            <span className="font-semibold">Description:</span>{" "}
            {product.description}
          </p>
          <p className="text-red-500 font-semibold mb-2">
            <span className="font-semibold">Price:</span> ${product.price}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Contact:</span> +213 540 30 54 96
          </p>
          <button
            className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
