import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ product }) => {
  const [index, setIndex] = useState(1);

  const images = [product.img1, product.img2, product.img3];

  const nextSlide = () => {
    const nextIndex = (index + 1) % images.length;
    setIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (index - 1 + images.length) % images.length;
    setIndex(prevIndex);
  };

  return (
    <div 
      className="grid grid-cols-3" 
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "30px 0"
      }}
    >
      <BsArrowLeftCircleFill onClick={prevSlide} className="mx-auto my-auto w-[50px]" />
      <div
        style={{
          maxWidth: "400px",
          minWidth: "290px",
          overflow: "hidden",
          margin: "10px"
        }}
      >
        <img
          src={`data:${images[index].contentType};base64,${images[index].data}`}
          alt={product.name}
          style={{ 
            width: "100%",
            height: "100%",
            maxHeight: "300px",
            display: "block",
            objectFit: "cover" 
          }}
        />
      </div>
      <BsArrowRightCircleFill onClick={nextSlide} className="my-auto mx-auto w-[50px]" />
    </div>
  );
};
