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
    <div className="grid grid-cols-3">
      <BsArrowLeftCircleFill onClick={prevSlide} className="mx-auto my-auto" />
      <img
        src={`data:${images[index].contentType};base64,${images[index].data}`}
        alt={product.name}
        className="w-[400px] my-[65%] mx-auto object-cover rounded-lg"
      />
      <BsArrowRightCircleFill onClick={nextSlide} className="my-auto mx-auto" />
    </div>
  );
};
