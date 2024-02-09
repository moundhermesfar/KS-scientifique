import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="mx-auto w-[300px] mt-20 mb-10 h-[2.5rem] border-none rounded-[10px] flex items-center px-4 shadow-md">
      <FaSearch id="search-icon" className="text-blue-300" />
      <input
        className="bg-transparent border-none h-full text-[1.25rem] w-full ml-[5px] focus:outline-none"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
