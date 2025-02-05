import React, { useState } from "react";
import { FaSearch, FaSistrix } from "react-icons/fa"; // Importing search icons

export default function SearchBox({ setSearchQuery }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setSearchQuery(input);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col items-center space-y-2">
      <div className="relative flex items-center w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search movies..."
          className={`w-full px-5 py-3 text-white bg-black border-2 ${
            error ? "border-red-600" : "border-gray-500"
          } rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 transition-all`}
        />
        <button
          type="submit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute right-3 p-3 rounded-full bg-transparent text-white transition-all hover:bg-red-600 hover:shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        >
          {isHovered ? <FaSistrix className="text-2xl" /> : <FaSearch className="text-xl" />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">Search is required</p>}
    </form>
  );
}
