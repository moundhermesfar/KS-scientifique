import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";

const BackButton = ({ destination }) => {
  const navigate = useNavigate();

  const handleClicked = (e) => {
    e.preventDefault();
    navigate(`${destination}`, { state: { auth: true } });
  };

  return (
    <div className="fixed m-5 flex">
      <button
        onClick={handleClicked}
        className="bg-red-600 text-white px-4 py-1 rounded-1g w-fit"
      >
        <BsArrowLeft className="text-2x1" />
      </button>
    </div>
  );
};

export default BackButton;
